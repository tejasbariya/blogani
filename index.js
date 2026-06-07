require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const connectDB = require("./db");
const blogRoutes = require("./routes/blogRoutes");
const { checkForAuthentication } = require("./middlewares/auth");

const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 8000;

// Configurations
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Global Architecture Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.resolve("./public")));

// Soft Authentication Check 
app.use(checkForAuthentication);

// Connection Point
connectDB(process.env.MONGO_URI);

// Orchestrated Routes Mapping
app.get("/", (req, res) => res.redirect("/blog"));
app.use("/user", userRoutes);
app.use("/blog", blogRoutes);

// Fallback Wildcard Catch Route
app.use((req, res) => res.redirect("/blog"));

app.listen(PORT, () => console.log(`Server executing seamlessly at: ${process.env.URL || `http://localhost:${PORT}`}`));