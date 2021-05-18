const express = require("express")
const app = express()

app.use(express.json())

app.use("/todos", require("./routes/todoRouter"))

app.listen(3000, () => {
    console.log("Your server is running on port 3000.")
})