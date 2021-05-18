const express = require('express')
const app = express()
const mongoose = require('mongoose')


app.use(express.json())
 
 
mongoose.connect(
    "mongodb://localhost:27017/Movies",{
    useCreateIndex: true,
    useFindAndModify:false,
    useUnifiedTopology:true,
    useNewUrlParser:true
}, ()=> console.log('dtabase is connnect') )


app.use('/api/movies', require('./routes/movies.js'))
 app.listen(4500, ()=>{
     console.log("server is runnin")
 })

