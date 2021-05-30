const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

//Middleware (for every request)
app.use(express.json()) // Looks for req body and turns it into "req.body"
app.use(morgan("dev")) // Logs requests to the console

mongoose.connect("mongodb://localhost:27017/bountydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, () => console.log('Connected to the db'))
// Routes //
app.use("/bounty", require("./routes/bountyRouter.js"))


app.use((err, req, res, next) => {
    console.log(err)
    return res.send({ errMsg: err.message })
})

//Server Listen
app.listen(7000, () => {
    console.log("The server is running on Port 7000")
})