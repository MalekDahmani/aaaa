const { signup, login}=require('../controllers/userController')
const express=require('express')
const router=express.Router()

// SIGNIN USERS
router.post("/signin",login)

// SIGNUP USERS
router.post("/signup",signup)

module.exports=router