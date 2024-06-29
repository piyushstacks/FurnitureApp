import mongoose from 'mongoose'
const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,lowercase:true},
    avatar:{type:String,required:true},
    password:{type:String},
    isNewUser: { type: Boolean, default: true } // Add this field
},{timestamps:true})

const User=mongoose.model("User",userSchema);
export default User;