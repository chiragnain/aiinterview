import mongoose from "mongoose";

const interviewSchema=new mongoose.Schema({

    answers: [{
        question: { type: String },
        userAnswer: { type: String },
        score: { type: Number },
        feedback: { type: String },
    }],    
    experience:{
        type:Number,
        required:true
    },
    jobRole:{
        type:String,
        required:true
    },
    jobDescription:{
        type:String,
    },
    createdBy:{ // mail of who created this interview
        type:String,
        required:true,
    }
},{timestamps:true})

const Interview=mongoose.model("Interview",interviewSchema)

export default Interview