import { Router } from "express";
import LikeController from "./like.controller.js";
const LikeRouter=new Router();
//api/likes/
LikeRouter.get('/:id',LikeController.getLikes);
LikeRouter.post('/toggle/:id',LikeController.toggleLikes);
