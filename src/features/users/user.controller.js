export default class UserController{
    static async registerUser(req,res){
        const {_id,name,gender,email,password}=req.body;

    }
    static async loginUser(req,res){
        const {email,password}=req.body;
    }
    static async updateUser(req,res){
        const {_id,name,gender,email,avatarPath}=req.body;

    }
    static async getUserDetails(req,res){//:userId as a parameter should be used here
        const userId=req.param;

    }
    static async getAllUsers(req,res){

    }
    static async logOutAllDev(req,res){

    }
    static async logOut(req,res){

    }
}