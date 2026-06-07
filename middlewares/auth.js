const { verifyTokenAndGetID } = require("../utils/jwt");
const User = require("../models/user");

// Injects user context into req.user globally if logged in, never blocks the request
async function checkForAuthentication(req, res, next) {
    const token = req.cookies?.token;
    if (!token) return next();

    try {
        const id = verifyTokenAndGetID(token);
        if (id) {
            const user = await User.findById(id).select("-password -salt");
            if (user) req.user = user;
        }
    } catch (error) {
        console.error("Auth initialization failed:", error.message);
    }
    next();
}

// Blocks requests to routes that strictly require a user account session
function restrictToLoggedInUsers(req, res, next) {
    if (!req.user) return res.redirect("/user/signIn");
    next();
}

module.exports = { checkForAuthentication, restrictToLoggedInUsers };