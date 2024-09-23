import mongoose from 'mongoose'
import { ObjectId } from 'mongodb'
import { userSchema, deviceSchema, loginSchema } from './user.schema.js'
const UserModel = mongoose.model('usermodel', userSchema)
const DeviceModel = mongoose.model('devicemodel', deviceSchema)
const LoginModel = mongoose.model('loginschema', loginSchema)
export default class UserRepository {
    static async registerUser(user) {
        if(user.avatarPath)
            user.avatarPath=user.avatarPath.replace('/',"\\");//here replacement is important to store the path to the db as it will generate error
        const newUser = new UserModel(user);
        return await newUser.save();
    }
    static async checkUser(email, pass, deviceName) {
        const result = await UserModel.findOne(email, pass);
        if (result) {//if a user exist then the creation of devic would be carried out
            const newDevice = new DeviceModel({
                name: deviceName,
                inTime: new Date().toLocaleTimeString()
            })
            await newDevice.save()
            const dev = await DeviceModel.findOne({ name: deviceName })
            const devId = dev._id
            const existingUser = await LoginModel.findOne({ userId: result._id })
            if (existingUser) {
                //then updation should be carried out 
                await LoginModel.findOneAndUpdate(existingUser, {
                    $push: {
                        deviceId: devId,
                    }
                })
            } else {
                // creation of new Loginmodel would be there
                const newLogin = new LoginModel({
                    userId: result._id,
                    deviceId: [devId]
                });
                await newLogin.save()
            }
        }
        else
            return undefined
    }
    static async updateUser(id, newUser) {
        return await UserModel.findOneAndUpdate(id, newUser)
    }
    static async getUser(id) {
        const result = await UserModel.findById(id);
        return result;
    }
    static async getAll() {
        const result = await UserModel.find();
        return result;
    }
    static async logOutAllDevice(id) {
        const loginUpdationResult = await LoginModel.findOneAndUpdate({ userId: id }, {
            $set: {
                deviceId: []//all the device id will be removed which means there are not instance of the device model
            }
        });
        return loginUpdationResult;
    }
    static async logOut(id, deviceId) {
        const loginModelResult = await LoginModel.findOneAndUpdate(id, {
            $pull: {
                deviceId: new ObjectId(deviceId),
            }
        });
        return loginModelResult;
    }
}