const { randomBytes, createHmac } = require("crypto");
const { Schema, model } = require("mongoose");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/jwt");

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        trim : true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase : true,
        trim : true
    },
    salt: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    profileImageUrl: {
        type: String,
        default: "./images/default_user_avatar.jpg"
    },
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER"
    }
},
    {
        timestamps: true
    }
)

// Pre-save hook for password encryption
userSchema.pre("save", async function () {
    const user = this;
    if (!user.isModified('password')) return;

    const salt = randomBytes(16).toString("hex");
    const hashedPass = createHmac("sha256", salt)
        .update(user.password)
        .digest("hex");

    user.salt = salt;
    user.password = hashedPass;
})

// Static Authentication Method
userSchema.static("matchPasswordAndGenerateToken", async function(email, password){
    const user = await this.findOne({ email : email.trim().toLowerCase() });
    if(!user) throw new Error("User does not exist!");

    const salt = user.salt;
    const hashedPass = user.password;

    const providedHashPass = createHmac("sha256", salt)
    .update(password)
    .digest("hex");

    if(hashedPass !== providedHashPass) throw new Error("Password Did not Match");

    const token =  await generateToken(user);
    return token;
})


const User = model("User", userSchema);

module.exports = User; 