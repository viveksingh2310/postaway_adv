import mongoose from 'mongoose'
import { userSchema ,deviceSchema,loginSchema } from './user.schema.js'
const UserModel=mongoose.model('usermodel',userSchema)
const DeviceSchema=mongoose.model('devicemodel',deviceSchema)
const LoginSchema=mongoose.model('loginschema',loginSchema)