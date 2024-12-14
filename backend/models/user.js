import mongoose from "mongoose";
import Interview from "./interview";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    fullName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    //  array of interviews
    pastInterviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:Interview,
        default:[]
    }]
    
},{timestamps:true})

const User=mongoose.model("User",userSchema);

export default User;