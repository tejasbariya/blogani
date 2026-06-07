const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
    {
        content: {
            type: String,
            required: true,
            trim: true,
        },
        blogId: {
            type: Schema.Types.ObjectId,
            ref: "Blog",
            required: true,
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        parentComment: {
            type: Schema.Types.ObjectId,
            ref: "Comment",
            default: null,
        },
    },
    { timestamps: true }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;