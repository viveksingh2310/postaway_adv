import PostRepository from "./post.repository.js";
export default class PostController {
    static async getAllPostFeed(req, res) {
        const result = await PostRepository.getAllPosts();
        if (result)
            return res.status(200).send(result);
        return res.status(200).send('No feed is present at now. The user should follow peoples to get the desired feed.')
    }
    static async getPosts(req, res) {//get all post of tshe specific user
        const userId = req.body.userId;
        const result = await PostRepository.getPosts(userId);
        if (result)
            return res.status(200).send(result)
        return res.status(400).send('no post for the specified user at present')
    }
    static async getPost(req, res) {//get a specific post based on the post id of it
        const { id } = req.body;
        const result = await PostRepository.getPost(id);
        if (result)
            return res.status(200).send(result)
        return res.status(400).send('requested post does not exist')
    }
    static async createPost(req, res) {
        // const {caption,userId,date,location,tags,likes,comments}=req.body;
        const result = await PostRepository.createPost(req.body);
        
        if (result)
            return res.status(200).send(result)
        return res.status(400).send('a bad request is being made to create a post')
    }
    static async updatePost(req, res) {
        const { id, caption, userId, date, location, tags, likes, comments } = req.body;
        const newPost = {
            caption: caption, userId: userId, date: date, location: location, tags: tags, likes: likes, comments: comments
        }
        const result = await PostRepository.updatePost(id, newPost);
        if (result)
            return res.status(200).send(result)
        return res.status(400).send('a bad request is being made to update a post')
    }
    static async deletePost(req, res) {
        const { id } = req.body;
        const result = PostRepository.deletePost(id);
        if (result)
            return res.status(200).send('deletion successfull')
        return res.status(400).send('a bad request is being made for deletion')
    }
}