import express from 'express'
import mongoose from 'mongoose'
import UserRouter from './src/features/users/user.routes.js'
import CommentRouter from './src/features/comments/comment.routes.js';
import PostRouter from './src/features/posts/post.routes.js';
import FriendRouter from './src/features/friendRequests/friend.routes.js';
import LikeRouter from './src/features/likes/like.routes.js';
try{
   await mongoose.connect('mongodb://127.0.0.1:27017/postaway',{useNewUrlParser:true,
    useUnifiedTopology:true});
    console.log('the mongoose is successfully connected to the database.')
}catch(err){
    console.log('Error while connecting to database from mongoose')
    console.log(err);
}
const app=express();
app.get("/",(req,res)=>{
    return res.send('the get of post number 4000 is working sucesfully');
});
app.use('/api/users/',UserRouter)
app.use('/api/comments',CommentRouter)
app.use('/api/likes',LikeRouter)
app.use('/api/post',PostRouter)
app.use('/api/friend',FriendRouter)
app.listen(4000,()=>{
    console.log('the server is running on port number 4000');
})