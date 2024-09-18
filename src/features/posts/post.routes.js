import { Router } from "express";
import PostController from "./post.controller.js";
const PostRouter=new Router();
PostRouter.get('/all',PostController.getAllPostFeed);//for feed
PostRouter.get('/:postId',PostController.getPost);//get a specific post based on the post id of it
PostRouter.get('/',PostController.getPosts);//get all post of tshe specific user
PostRouter.post('/',PostController.createPost);//create a new post
PostRouter.delete('/:postId',PostController.deletePost);//delete a specific post
PostRouter.put('/:postId',PostController.updatePost);//update a specific post
