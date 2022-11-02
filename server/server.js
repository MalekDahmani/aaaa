const mongoose = require ('mongoose')
const express = require ('express')

const bodyParser = require ('body-parser')
const logged = require ('morgan')
const connectDB = require('./config/connectDB')
require ('dotenv').config({path:'./config/.env'})

const workoutRoutes = require ('./routes/workout')
const userRoutes = require ('./routes/user')
const auth = require ('./middleware/auth')



const app = express()

const PORT = 3001 




app.use((req,res,next)=>{
    console.log(req.path , req.method)
    next()
 })

connectDB();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(logged('dev'))



app.use('/api/workout',auth,workoutRoutes)
app.use("/api/user",auth,userRoutes)




app.listen(PORT,()=>{
    console.log(`LISTENING ON PORT ${PORT}`)
})
