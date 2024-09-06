import mongoose from 'mongoose'
export const userScehma=mongoose.Schema({
    name:{type:String,required:[true,'Name of the User is required']},
    email:{type:String,unique:true,required:[true,'Email of the User is required'],
        validate:{
            validator:function(value){
                return value.contains('@') &&  value.contains('.gmail')
            },
            message:'The Email should be unique and valid account of the User'
        }
    },
})