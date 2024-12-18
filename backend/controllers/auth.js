import User from '../models/user'
import bcrypt from 'bcryptjs';

export const signup=async (req,res)=>{
    try{
        const {fullName,userName,email,password}=req.body;

        const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!emailRegex.test(email)){
            return res.status(400).json({error:"invalid email format"})
        }

        const existingUser=await User.findOne({username:userName})
        if(existingUser){
            return res.status(400).json({error:"user already exists"})
        }

        const existingEmail=await User.findOne({email:email})
        if(existingEmail){
            return res.status(400).json({error:"email already taken"})
        }

        if (password.length < 6) {
			return res.status(400).json({ error: "Password must be at least 6 characters long" });
		}

        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)

        const newUser=new User({
            fullName:fullName,
            userName:userName,
            email:email,
            password:hashedPassword,
        })

        if(newUser){
            generateTokenandSetCookie(newUser._id,res)
            await newUser.save()
            
            res.status(200).json({
                _id:newUser._id,
                fullName:newUser.fullName,
                userName:newUser.userName,
                email:newUser.email,
                pastInterviews:newUser.pastInterviews
            })
        }
        else{
            res.status(400).json({error:"invalid user data"})
        }

    }
    catch(error){

    }
}

export const login=(req,res)=>{
    res.json({
        data:"you hit login endpoint",
        rando:"you hit the random endpoint"
    })
}

export const logout=async (req,res)=>{
    res.json({
        data:"you hit logout endpoint",
    })
}