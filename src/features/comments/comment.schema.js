import mongoose from 'mongoose'
export const commentSchema = mongoose.Schema(
    {
        title:{
            type: String,
            required: [true, 'There should a title in the comment']
        },
        userId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'There should be a UserId for the comment as well']
        },
        postId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post',
            required: [true, 'There should be a PostId for the comment as well']
        },
        likes:[
            {   required:false,
                type:mongoose.Schema.Types.ObjectId,
                ref:'Like',
                on_model:'Comment'
            }
        ]
    }
)
