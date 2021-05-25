const express = require("express")
const app = express()
const morgan = require("morgan")

//Middleware (for every request)
app.use(express.json()) // Looks for req body and turns it into "req.body"
app.use(morgan("dev")) // Logs requests to the console

// Routes //
app.use("/bounty", require("./routes/bountyRouter.js"))

//Server Listen
app.listen(7000, () => {
    console.log("The server is running on Port 7000")
})