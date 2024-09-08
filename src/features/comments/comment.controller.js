import mongoose from 'mongoose'
import { postSchema } from "../posts/post.schema.js";
const PostModel=mongoose.model('postmodel',postSchema)
export default class CommentController{
    static async getComments(req,res){
        const {postId}=req.params;
        const result=PostModel
    }
    static async addComment(req,res){
        const {postId}=req.params;
    }
    static async deleteComment(req,res){
        const {commentId}=req.params;
    }
    static async updateComment(req,res){
        const {commentId}=req.params;
    }
}