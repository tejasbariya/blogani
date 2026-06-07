const { Router } = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs").promises;

const Blog = require("../models/blog");
const Comment = require("../models/comment");

const { restrictToLoggedInUsers } = require("../middlewares/auth");

const router = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.resolve("./public/uploads/coverImages")),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

// Public: View Feed Feed
router.get("/", async (req, res) => {
  const blogs = await Blog.find({}).populate("postedBy", "fullName profileImageUrl").sort({ createdAt: -1 });
  return res.render("home", { user: req.user, blogs });
});

// Protected: Write Article View
router.get("/create", restrictToLoggedInUsers, (req, res) => {
  return res.render("createBlog", { user: req.user });
});

// Protected: Save Article Submission
router.post("/create", restrictToLoggedInUsers, upload.single("coverImage"), async (req, res) => {
  const { title, body } = req.body;
  const blogImageUrl = req.file ? `/uploads/coverImages/${req.file.filename}` : "/images/cover-placeholder.jpg";

  const blog = await Blog.create({
    title,
    body,
    blogImageUrl,
    postedBy: req.user._id,
  });
  return res.redirect(`/blog/${blog._id}`);
});

// Protected: Destroy Entry
router.get("/delete/:id", restrictToLoggedInUsers, async (req, res) => {
  try {
    const blog = await Blog.findOneAndDelete({ _id: req.params.id, postedBy: req.user._id });
    if (blog?.blogImageUrl && !blog.blogImageUrl.includes("placeholder")) {
      await fs.unlink(path.resolve(`./public${blog.blogImageUrl}`)).catch(() => null);
    }
  } catch (err) {
    console.error("Error executing safe deletion pipeline:", err);
  }
  return res.redirect("/blog");
});

// Public: Read Article & Load Comments
router.get("/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate("postedBy", "fullName profileImageUrl");
  if (!blog) return res.redirect("/blog");

  const allComments = await Comment.find({ blogId: req.params.id })
    .populate("createdBy", "fullName profileImageUrl")
    .sort({ createdAt: -1 }); 

  const topLevelComments = allComments.filter(c => !c.parentComment);
  const replies = allComments.filter(c => c.parentComment);

  const threadedComments = topLevelComments.map(comment => {
    return {
      ...comment.toObject(),
      replies: replies
        .filter(r => r.parentComment.toString() === comment._id.toString())
        .sort((a, b) => a.createdAt - b.createdAt) 
    };
  });

  return res.render("blog", { 
    blog, 
    user: req.user, 
    comments: threadedComments, 
    totalComments: allComments.length 
  });
});

// Protected: Post a Comment or Reply
router.post("/:id/comment", restrictToLoggedInUsers, async (req, res) => {
  const { content, parentComment } = req.body;
  await Comment.create({
    content,
    blogId: req.params.id,
    createdBy: req.user._id,
    parentComment: parentComment || null,
  });
  return res.redirect(`/blog/${req.params.id}#comments`);
});

// Protected: Delete a Comment
router.get("/comment/delete/:commentId", restrictToLoggedInUsers, async (req, res) => {
  const comment = await Comment.findById(req.params.commentId);
  if (!comment) return res.redirect("back");

  if (comment.createdBy.toString() === req.user._id.toString()) {
    await Comment.findByIdAndDelete(req.params.commentId);
    await Comment.deleteMany({ parentComment: req.params.commentId });
  }
  
  return res.redirect(`/blog/${comment.blogId}#comments`);
});
module.exports = router;