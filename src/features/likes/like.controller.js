import LikeRepository from "./like.repository.js";
export default class LikeController{
static async getLikes(req,res){
    const {id}=req.params;
    console.log('thossssssssiiiiiiiss is hte eeee iddd'+id);
    const result=await LikeRepository.getLikes(id);
    if(result)
        return res.status(200).send(result)
    else return res.status(400).send('The userId does not exist or you have sent a bad request to the server')
}
static async toggleLikes(req,res){
    const id=req.param;
    const {itemId,type}=req.body;
    const result=LikeRepository.toggleLikes(id,itemId,type);
    if(result)
        return res.status(200).send(result)
    else return res.status(400).send('The desired user/item was not found or you have sent a bad request to the server');
}
}