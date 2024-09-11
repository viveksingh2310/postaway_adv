import mongoose from "mongoose"
import { commentSchema } from "./comment.schema.js"
const CommentModel=mongoose.model('commentmodel',commentSchema)
export default class CommentRepository{
    static async getComments(id){
const result=await CommentModel.find({postId:id})
return result
    }
    static async addComment(comment){
        const newComment=CommentModel(comment)
        return await newComment.save()
    }
    static async updateComment(id,title,userId,postId){
        // const id=comment.id
        const update={
            title:title,
            userId:userId,
            postId:postId,
        }
const updatedComment=await CommentModel.finOneAndUpdate(id,update)
return updatedComment
    }
    static async deleteComment(id){
        const comment=CommentModel.findById(id)
        return CommentModel.delete(comment)
    }
}
