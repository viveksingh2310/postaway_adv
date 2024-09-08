import mongoose from "mongoose";
import { commentSchema } from "./comment.schema.js";
const commentRepository=mongoose.model('commentmodel',commentSchema);

export default class CommentRepository{
    static async getComments(){

    }
}
