require('dotenv').config({ path: __dirname + '/.env' });

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const app = express()

//importing routes here




//for middleWares
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({ useTempFiles: true }))
//for Database connection with Mongo Db
const URI = process.env.URL
mongoose.connect(URI, err => {
    if (err) throw err;
    console.log("Connected to mongo db")
})
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log("Server is runnig on port ", PORT)
})


 
//Routes
app.use('/user', require('./routes/userRouter'))
app.use('/api', require('./routes/categoryRouter'))
app.use('/api', require('./routes/upload'))
app.use('/api', require('./routes/productRouter') ) 



