const mongoose = require("mongoose");

async function connectDB(MONGO_URI) {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.error("Database connection fault:", error.message);
        process.exit(1);
    }
}

module.exports = connectDB;