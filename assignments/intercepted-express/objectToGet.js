const express = require("express")
const objectRouter = express.Router()

const myObject = [{name:"Ren Gian"}]

objectRouter.get("/", (req, res, next) => {
    req.body = {name: "Ren M Gian"}
    next()
})

objectRouter.get("/", (req, res, next) => {
    res.send(req.body)
})

module.exports = objectRouter