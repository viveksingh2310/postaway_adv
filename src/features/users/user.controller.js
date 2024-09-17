import UserRepository from "./user.repository.js";
export default class UserController {
    static async registerUser(req, res) {
        const { name, username, gender, email, password } = req.body;
        const newUser = {
            name: name,
            gender: gender,
            email: email,
            password: password,
            username: username,//here the id will be the username as the username is always same 
        }
        const result = await UserRepository.registerUser(newUser);
        if (result)
            return res.status(200).send(result)
        else
            return res.status(400).send('A bad request is being made to insert the necessary details for registering the User.')
    }
    static async loginUser(req, res) {
        const { email, password, deviceName } = req.body;//bcoz only the client would know about the device they are logging in
        const result = UserRepository.checkUser(email, password, deviceName)
        if (result)
            return res.status(200).send('login successfull')
        else
            return res.status(400).send('user not registered please register first')
    }
    static async updateUser(req, res) {
        //this function should be called when the user updates its avatar
        //here the username could also be changed
        const { _id, name, gender, email, avatarPath } = req.body;
        const newUser = {
            name: name,
            gender: gender,
            email: email,
            avatarPath: avatarPath,
        }
        const result = UserRepository.updateUser(_id, newUser)
        if (result)
            return res.status(200).send('updation of user is successfull')
        else
            return res.status(400).send('updation is not successfull because of either bad request or unregistered case of the user')
    }
    static async getUserDetails(req, res) {//:userId as a parameter should be used here
        const id = req.param;
        const result = await UserRepository.getUser(id)
        if (result)
            return res.status(200).send(result)
        return res.status(400).send('user not found')
    }
    static async getAllUsers(req, res) {
        const result = await UserRepository.getAll();
        if (result)
            return res.status(200).send(result)
        return res.status(400).send('No user found')
    }
    static async logOutAllDev(req, res) {
        const { id } = req.body;
        const result = await UserRepository.logOutAllDevice(id);
        if (result)
            return res.status(200).send(result)
    }
    static async logOut(req, res) {
        const { id, deviceId } = req.body;
        const result = await UserRepository.logOut(id, deviceId);
        if (result)
            return res.status(200).send(result)
        return res.status(400).send('Error occured while loggin in. Please contact admin regarding this issue or mail at viveksingh14538@gmail.com')
    }
}