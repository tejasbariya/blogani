const jwt = require("jsonwebtoken");

function generateToken(user) {
    const payload = {
        id: user._id,
        email: user.email,
        role: user.role,
    };
    return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
}

function verifyTokenAndGetID(token) {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        return decoded.id;
    } catch (err) {
        return null;
    }
}

module.exports = { generateToken, verifyTokenAndGetID };