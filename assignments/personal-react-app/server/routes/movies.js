const express = require('express')
const movieRouter = express.Router()
const movie = require('../moviemodel.js')

movieRouter.get('/', (req, res, next)=>{
    movie.find((err, movies) =>{
        if(err){
            res.status(500)
            res.next(err)

        }
        return res.send(movies)
    })
})

movieRouter.post('/', (req, res, next) =>{
    movie.save((err, newMovie) =>{
        if(err){
            res.status(500)
            res.next(err)
        }
        return res.status(200).send(newMovie)
    })
})

module.exports = movie