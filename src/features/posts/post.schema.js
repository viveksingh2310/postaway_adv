import mongoose from 'mongoose'
export const postSchema = mongoose.Schema(
    {
        caption: {
            type: String,
            requried: [true, 'there should be a proper title of the post ']
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'//here we'll get the username of the user who has posted the post.
        },
        date: {
            type: String, default: Date.now().toLocaleString(),
        },
        location: 
        { 
            type: String
         },
        tags: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:'User'
            }
        ],
        likes:[
            {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Like'// all the details of the likes should be present for example the username of the liker
            }
        ],
        comments:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'Comment',//all the detials of the commentor would be available but only the username and the likes on the comments are useful in the present conetext.
            },

        ]

    }
)