import mongoose from 'mongoose'
export const likeSchema=mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        },//a user can like both comment or post
    likeable:[
            {
            type:mongoose.Schema.Types.ObjectId,
            refPath:'on_model',
            status:{
                type:String,
                enum:['liked','unliked']
            }, 
            }
        ],
            on_model:{
                type:String,
                required:true,
                enum:['Post','Comment']
        }
    } )