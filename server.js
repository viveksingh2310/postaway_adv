import express from 'express'
import mongoose from 'mongoose'
try{
    // const connectOps= mongoose.ConnectOptions();
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
app.listen(4000,()=>{
    console.log('the server is running on port number 4000');
})