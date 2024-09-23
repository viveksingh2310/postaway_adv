import Router from 'express'
import CommentController from './comment.controller.js'
export const CommentRouter=Router()
CommentRouter.get('/:postId',CommentController.getComments)
CommentRouter.post('/:postId',CommentController.addComment)
CommentRouter.delete('/:commentId',CommentController.deleteComment)
CommentRouter.put('/:commentId',CommentController.updateComment)
export default CommentRouter