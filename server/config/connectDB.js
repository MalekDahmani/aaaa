const mongoose = require ('mongoose')


require ('dotenv').config({path:'./.env'})

const connectDB = async()=>{
   try {
      mongoose.connect( process.env.MONGO_URL, {useNewUrlParser:true})
      console.log('connected to the database')
   } catch (error) {
       console.log('cant connect to database ')
   }
}

module.exports = connectDB