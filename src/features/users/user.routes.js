import { Router } from "express";
import UserController from "./user.controller.js";
const UserRouter= new Router();
UserRouter.post('/signup',UserController.registerUser)
UserRouter.post('signin',UserController.loginUser)
UserRouter.post('/logout',UserController.logOut)
UserRouter.post('/logout-all-devices',UserController.logOutAllDev)
UserRouter.get('/get-all',UserController.getAllUsers)
UserRouter.get('/get-details:userId',UserController.getUserDetails)
UserRouter.update('/update-details:userId',UserController.updateUser)