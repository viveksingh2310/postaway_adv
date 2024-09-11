import mongoose from 'mongoose'
import CommentRepository from './comment.repository.js'
export default class CommentController{
    static async getComments(req,res){//postId should be there
        try{
      const {postId}=req.body
      const comments=CommentRepository.getComments(postId)
      return res.status(400).send(comments)
        }catch(err){
            console.log('Error occured in the database operation')
            return res.status(500).send(err)
        }

    }
    static async addComment(req,res){//proper comment structure should be there
        const comment=req.body
       const result= CommentRepository.addComment(comment)
       if(result)
        return res.status(200).send(result)
    else
    return res.status(500).send('A badrequest is being made to add a new comment to the database')
    }
    static async deleteComment(req,res){//commentId in params
        const {commentId}=req.params
        const result=CommentRepository.deleteComment(commentId)
        if(result)
            return res.status(202).send(result)
        else return res.status(400).send('Bad request for comment deletion')
    }
    static async updateComment(req,res){//commentId with the updated comment content should be there
        const {commentId}=req.params
        // const {title,userId,postId}=req.body
        const result=CommentRepository.updateComment(commentId,...req.body)
        if(result)
            return res.status(200).send(result)
        return res.status(400).send('Bad request is sent for Comment Updation. Make sure you have sent it in title,userId,postId format only')
    }
}