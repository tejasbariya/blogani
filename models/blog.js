const { Schema, model } = require("mongoose");

const BlogSchema = new Schema({
    title : {
        type : String,
        required : true,
        trim : true
    },
    body : {
        type : String,
        required : true
    },
    coverImageId: {
        type: String, 
        required: true 
    },
    postedBy : {
        type : Schema.Types.ObjectId,
        ref : "User",
        required : true
    }
    
},
    {
        timestamps : true
    }
)

const Blog = model("Blog", BlogSchema);

module.exports = Blog;