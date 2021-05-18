const express = require("express")
const app = express()

app.use(express.json()) // Looks for req body

// Routes //
app.use("/inventory", require("./routes/inventoryRouter.js"))

//Server Listen
app.listen(8000, () => {
    console.log("The server is running on Port 8000")
})