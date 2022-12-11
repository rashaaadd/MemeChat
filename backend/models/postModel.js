import mongoose from 'mongoose'

const PostSchema =  mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    userName : {
        type : String,
    },
    userProfilePic : {
        type: String
    },
    desc : {
        type : String,
    },
    images : {
        type : String,
        required : [true,'No image']
    },
    comments : [
        {
            commentedUserId : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "User",
                required : true
            },
            commentedUserName : {
                type : String,
                required : true
            },
            commentedUserPic : {
                type : String,
                required : true
            },
            comment : {
                type : String,
                required : true
            },
            commentTime : {
                type : Date,
                required : true
            }
        }
    ],
    tags : {
        type: [String],
        default : []
    },
    saves : {
        type : [String],
        default : []
    }
},{
    timeStamp : true
})

export default mongoose.Schema("Post",PostSchema);

