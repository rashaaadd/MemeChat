import asyncHandler from 'express-async-handler'
import bcrypt from 'bcryptjs'
import User from '../models/userModel.js'
import jwt from 'jsonwebtoken'

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
};


//@desc Register new user
//@route POST /register 
//access /public    
const registerUser = asyncHandler(async(req,res)=>{
    console.log("registering user call reached in server")
    const { fname,lname,password,email,phone,username } = req.body
    //Validation
    if(!fname || !lname || !password || !email || !phone || !username){
        res.status(400)
        throw new Error("Please add all fields");
    }
    //Check if user already exists
    const [emailExists, phoneExists, usernameExists] = await Promise.all([
        User.findOne({ email }),
        User.findOne({ phone }),
        User.findOne({ username }),
    ])
    
    if(emailExists){
        res.status(400)
        throw new Error("Email already exists");
    }

    if(phoneExists){
        res.status(400)
        throw new Error("Phone already exists");
    }
    
    if(usernameExists){
        res.status(400)
        throw new Error("Username already exists");
    }
    //Hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt);

    //Create User
    const newUser = await User.create({
        fname,
        lname,
        password: hashedPassword,
        email,
        phone,
        username,
    }) 
    if(newUser){
        res.status(201).json({
            status:"success",
            data:{
                _id: newUser._id,
                fname,
                lname,
                email: newUser.email,
                token: generateToken(newUser._id),
                message: "User created successfully"
            }
        })
    }else{
        res.status(401);
        throw new Error("User registration failed");
    }

})

//@desc Authenticate user
//@route POST /login
//access /public
const loginUser = asyncHandler(async(req,res)=>{
    console.log("login user call reached in server")
    const { email,password } = req.body

    //Validation
    if(!email ||!password ){
        res.status(400)
        throw new Error("Please add all fields");
    }

    //Check if user exists
    const user = await User.findOne({email})
    if(user && await bcrypt.compare(password, user.password)){
        res.status(200).json({
            status:'success',
            data:{
                _id: user._id,
                fname: user.fname,
                lname: user.lname,
                token: generateToken(user._id),
                message: "User Login Successfull"
            }
        })
    }else{
        res.status(400)
        throw new Error("Invalid Credentials")
    }

})

//@desc Get user info
//@route GET /user
//access /private

const getUser = asyncHandler(async(req,res)=>{
    // try{
    //     console.log(req.user,'shjhgajhas................')
    //     const userID=req.user._id

    //     console.log('User details requested',req.user._id);
    //     const user = await User.findOne({_id:userID});
    //     conosle.log(user,'asdaasdasda1111.....12121')
    //     if(!user){
    //         res.status(200).json({message:"User does not exist."})

    //     }else{
    //         res.status(200).json({
    //             status:"success",
    //             data:{
    //                 user
    //             }
    //         })
    //     }
    // }catch(error){
    //     res.status(501);
    //     throw new Error("Error getting user data")
    // }

    try{
            console.log(req.user,'shjhgajhas................')
            if(!req.user){
                res.status(200).json({message:"User does not exist."})
    
            }else{
                res.status(200).json({
                    status:"success",
                    data:{
                        user:req.user
                    }
                })
            }
        }catch(error){
            res.status(501);
            throw new Error("Error getting user data")
        }

})
const data = asyncHandler((req,res)=>{
    console.log('Data vilichuu moneee');
    const arr = {
        status:true,
        data:{
            name: 'Rashad',
            place: 'Malappuram',
            Salary: 900000
        }
    }
    res.status(200).json(arr)
})





export {
    registerUser,
    loginUser,
    getUser,
    data
}
