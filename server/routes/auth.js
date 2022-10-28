const router = require ('express').Router();
const { findOne } = require('../model/user');
const user = require('../model/user')

// export const getPost = async(req,res)=>{
//     try {
//         const Data = await data.find()
//         res.status(200).json(Data)
//     } catch (error) {
//         res.status(404).json({message:error.message})
//     }
// }

const createUser = async(req,res)=>{
    const user = req.body
    const newUser = new data(user)
    try {
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

router.post('/register',async(req,res)=>{
    const {firstName,LastName,email,Password,age} = req.body;
    try {
        if (!firstName || !LastName || !email || !Password || !age){
            return res.status(400).json({message: "please enter all fields"})
        }
        let user = await user.findOne({email})
        if (user){
            return res.status(404).json({message:"user Already exists"})
        }
        const newUser = new user ({firstName,LastName,email,Password,age})
    } catch (error) {
        
    }
})