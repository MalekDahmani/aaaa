const mongoose = require ('mongoose')
const express = require ('express')
var cors = require('cors')
const bodyParser = require ('body-parser')
const logged = require ('morgan')
const connectDB = require('./config/connectDB')
const authRouter = require ('./routes/auth')




const PORT = 3001

const app = express()

// app.use(cors())

const router = express.Router()

connectDB();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(logged('dev'))


router.get('/', getPost)

router.post('/', createPost)

app.use('/api',router)




app.listen(PORT,()=>{
    console.log(`LISTENING ON PORT ${PORT}`)
})
