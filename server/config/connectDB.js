const mongoose = require ('mongoose')

require ('dotenv').config({path:'../config/.env'})

const connectDB = async()=>{
   try {
      mongoose.connect(process.env.MONGO_URL)
      console.log('connected to the database')
   } catch (error) {
       console.log('cant connect to database ')
   }
}

module.exports = connectDB