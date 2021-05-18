const express = require("express")
const app = express()

app.use(express.json())

app.use("/myObject", require("./objectToGet"))

app.listen(8000, () => {
    console.log("You server is running on Port 8000!")
})