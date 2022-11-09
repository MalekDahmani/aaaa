const mongoose = require ('mongoose')
const express = require ('express')


require ('dotenv').config({path:'./.env'})

const workoutRoutes = require ('./routes/workout')
const userRoutes = require ('./routes/user')




const app = express()
const PORT = 3001 

app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path , req.method)
    next()
 })


app.use('/api/workout',workoutRoutes)
app.use("/api/user",userRoutes)

app.listen(PORT,async()=>{
    try{
        await mongoose.connect('mongodb+srv://MalekMern:malek123@cluster0.ijeetiu.mongodb.net/?retryWrites=true&w=majority')
        console.log(`server is listening on port ${PORT}`)
        console.log("Connection successfull")
      }catch(err){
         console.log(err)
      }
})
