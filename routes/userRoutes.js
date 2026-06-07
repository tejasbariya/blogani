const { Router } = require("express");
const User = require("../models/user");

const router = Router();

// Public: Sign Up View
router.get("/signUp", (req, res) => res.render("signUpPage"));

// Public: Sign Up Handler
router.post("/signUp", async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        console.log("Received sign-up data:", { fullName, email });
        await User.create({ fullName, email, password });
        return res.redirect("/user/signIn");
    } catch (err) {
        return res.render("signUpPage", { error: "Email already registered or registration invalid." });
    }
});

// Public: Sign In View
router.get("/signIn", (req, res) => res.render("signInPage"));

// Public: Sign In Handler
router.post("/signIn", async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await User.matchPasswordAndGenerateToken(email, password);
        return res.cookie("token", token, { httpOnly: true, secure: process.env.NODE_ENV === "production" }).redirect("/blog");
    } catch (err) {
        return res.render("signInPage", { error: err.message || "Invalid email or password" });
    }
});

// Protected: Logout Handler
router.get("/logout", (req, res) => {
    return res.clearCookie("token").redirect("/blog");
});

module.exports = router;