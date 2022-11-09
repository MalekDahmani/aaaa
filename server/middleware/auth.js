const jwt = require('jsonwebtoken')
const User=require('../model/userModel')


const requireAuth = async (req,res,next)=>{
  
    // verify authentication
    const {authorization}=req.headers;

    if(!authorization){
        return res.status(401).json({error:"Authorization token required"})
    }
    const token=authorization.split(' ')[1]
    
    try {
        
        const {_id}=jwt.verify(token,process.env.SECRET)
        req.user= await User.findOne({_id}).select('_id')
        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({error:"Request is not Authorized"})
    }
}

module.exports=requireAuth

// const auth = async(req,res,next)=>{
//     try {
//         const token = req.headers.authorization.split(" ")[1]
//         const isCustomAuth = token.length < 500

//         let decodedData;

//         if (token && isCustomAuth) {
//             decodedData = jwt.verify(token, 'test')

//             req.userId = decodedData?.id
//         }else{
//             decodedData = jwt.decode(token)

//             req.userId = decodedData?.sub
//         }
//         next()
//     } catch (error) {
//         console.log(error)
//     }
// }
// module.exports = auth