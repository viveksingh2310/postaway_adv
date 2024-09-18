import mongoose from 'mongoose'
import { postSchema } from "./post.schema.js";
const PostModel = new mongoose.model('postmodel', postSchema);
export default class PostRepository {
    static async getAllPosts() {//get all post for the feed 
        const posts = await PostModel.find();
        return posts;
    }
    static async getPosts(userId) {//get all post of a user
        const posts = await PostModel.find({ userId: userId });
        return posts;
    }
    static async getPost(postId) {//et a specific post
        const post = await PostModel.find({ postId: postId });
        return post;
    }
    static async createPost(post) {
        const newPost = new PostModel(post);
        return await newPost.save();
    }
    static async updatePost(id, newPost) {
        const upPost = await PostModel.findOneAndUpdate(id, newPost);
        return upPost;
    }
    static async deletePost(postId) {
        const deldPost = await PostModel.findOneAndDelete({ postId: postId });
        return deldPost;
    }
}