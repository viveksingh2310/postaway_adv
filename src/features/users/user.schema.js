import mongoose from 'mongoose'
//name,gender,email,password
export const userSchema = mongoose.Schema({
    name: { 
        type: String, required: [true, 'Name of the User is required']
     },
    username: {
        type: String,
        unique: [true, 'The username should be unique']
    },
    gender: {
        type: String, required: [true, 'Gender of the User is required'],
        enum: ['Male', 'Female', 'Prefer Not to Say']
    },
    email: {
        type: String, unique: true, required: [true, 'Email of the User is required'],
        validate: {
            validator: function (value) {
                return value.contains('@') && value.contains('.gmail')
            },
            message: 'The Email should be unique and valid account of the User'
        }
    },
    password: {
        type: String,
        required: [true, 'The Password of the User is required']
    },
    avatarPath: {
        type: String, enum: [
            'Default',
            'C:\Users\Dell\Documents\GitHub\postaway_adv\src\images\Girl.png',
            "C:\Users\Dell\Documents\GitHub\postaway_adv\src\images\Boy.png",
            'C:\Users\Dell\Documents\GitHub\postaway_adv\src\images\Default.png',
            'C:\Users\Dell\Documents\GitHub\postaway_adv\src\images\Employee.png',
            'C:\Users\Dell\Documents\GitHub\postaway_adv\src\images\Girl_Specs.png',
            'C:\Users\Dell\Documents\GitHub\postaway_adv\src\images\Happy.png',
        ],
        required: false//this is not required but will be updated whenever the user want it to change
    },

})
export const deviceSchema = mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    inTime: {
         type: String
         },// time when login has occured
    outTime: {
         type: String,
          default: 'Not Mentioned' }//time when logout has occured
}).pre('save', (next) => {
    console.log('device data is being saved');
    next();
}).post('save', (doc) => {
    console.log('device data is saved as')
    console.log(doc);
})
export const loginSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    deviceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Device'
    }
})