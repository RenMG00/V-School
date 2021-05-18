const mongoose = require('mongoose')
const  Schema = mongoose.Schema

const movieSchema = new Schema({
    Title:{
        type:String,
        

    },
    Genre:{
        type: String,
        
    },
    Poster:{
        type:String
    },
    Description:{
        type:String
    }
})

module.exports= mongoose.model('Movie', movieSchema )