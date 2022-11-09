const User = require('../model/userModel')
const mongoose = require('mongoose')
const jwt = require ('jsonwebtoken')


// Create json Web Token
const createToken=(_id)=>{
    return jwt.sign({_id},process.env.SECRET,{expiresIn:"3d"})
}

// login users
const login = async (req, res) => {

  const {email,password}=req.body
  try {
      const user=await User.findOne(email,password)
      const token=createToken(user._id)

      res.status(200).json({email,token})
  } catch (error) {
      res.status(400).json({error:error.message})
  }
}

// signup users
const signup = async (req, res) => {
  const { firstName,lastName,email,password,age} = req.body;
  try {
      const user = await User.findOne(firstName,lastName,email,password,age)
      const token=createToken(user._id)
      
      res.status(200).json({ email, token })
      
  } catch (error) {
      res.status(400).json({ error: error.message })
  }

}

module.exports = { login, signup }



// // signUp
//  const signup = async (req,res)=>{
//     const {firstName, lastName,email,password,age} = req.body

//       try {

//         if (!firstName || !lastName || !email || !password || !age){
//             return res.status(400).json({message:"please enter all fields"})
//         }

//         const existingUser = await user.findOne({email})

//         if (existingUser) return res.status(400).json({message:"User already exists"})

//         const hashedPassword = await bcrypt.hash(password,15)

//         const result = await new user({firstName,lastName,email,password: hashedPassword,age})

//         const token = jwt.sign({email: result.email, id:result._id}, 'test', {expiresIn:"1h"})

//         res.status(200).json({result: result, token})


//     } catch (error) {
//         res.status(500).json({message: "something went wrong"})
//     }
// }


// //SignIn

//  const signin = async (req,res)=>{
//    const {email , password} = req.body
//    try {
//        const existingUser = await user.findOne({email})

//        if (!existingUser) return res.status(404).json({message:"User doesn't exist"})

//        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)

//        if (!isPasswordCorrect) return res.status(400).json({message: "invalide credentials"})

//        const token = jwt.sign({email: existingUser.email, id:existingUser._id}, 'test', {expiresIn:"1h"})

//        res.status(200).json({result: existingUser, token})
//    } catch (error) {
//        res.status(500).json({message: "something went wrong"})
//    }
// }

// module.exports = {signin, signup}