// create mini applications
import exp from 'express'
import {UserModel} from '../models/UserModel.js'
import {hash,compare} from 'bcrypt'
import jwt from 'jsonwebtoken'
import { userApp } from './UserAPI.js'
import { verifyToken } from '../middlewares/verifyToken.js'
export const commonApp = exp.Router()

const {sign}=jwt
// Route to register
commonApp.post('/users',async (req,res)=>{
    // get tthe details of the user
    const newUser= req.body;
    // check for the roles : only author and user not admin
    let allowedRoles=['USER','AUTHOR']
    if(!allowedRoles.includes(newUser.role))
        return res.status(400).json({message:"invalid role"})
    // replace the password eith hashed password
    newUser.password = await hash(newUser.password,12)
    // create document
    const userDocument = new UserModel(newUser);
    // save document
    await userDocument.save()
    // send respone
    res.status(201).json({message:"User Created "});
})

// route for login
commonApp.post('/login',async(req,res)=>{
    // get email and password from the req
    const {email,password} = req.body;
    // get user details
    const user = await UserModel.findOne({email:email})
    if(! user){
        return res.status(400).json({message:"Invalid email"});
    }
    // compare the password with og password
    let isMatched = await compare(password,user.password)
    if(!isMatched){
        return res.json({message:"Incorrect password"});
    }


    // TOKEN CREATION
    const signedToken = sign({_id:user._id,email:user.email,role:user.role},process.env.SECRET_KEY,{expiresIn:"1h"})
    
    // set token to the cookie header 
    res.cookie("token",signedToken,{
        httpOnly:true,
        sameSite:"lax",
        secure:false
    })
    // remove the password field from the user obj
    const userObj = user.toObject();
    delete userObj.password;

    res.status(200).json({message:"Login Successful",payload:userObj})
})

// route for logout
commonApp.get('/logout',(req,res)=>{
    // delete the teoken from the cookie storage
    res.clearCookie("token",{
        httpOnly:true,
        sameSite:"lax",
        secure:false
    })
    res.status(200).json({message:"Logged out successfully"});
})

//change password
// commonApp.put("/password",verifyToken("USER","AUTHOR","ADMIN"),async(req,res)=>{
//     //check current password and new password are same
//     const {currentpassword,newpassword}=req.body;
//     // get current pw of user user/admin/author
//     const userId=req.user?._id;
//     const user =await UserModel
//     //check the current password of req and user are not same
//     // hash the new password
//     //replace current pw with new pw
//     //save 
//     //send res
// })