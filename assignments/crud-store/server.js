const express = require("express")
const app = express()
const mongoose = require("mongoose")
//mongoose.set('bufferCommands', false);


app.use(express.json())

    mongoose.connect("mongodb://127.0.0.1:27017/ crudstoredb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, () => console.log('Connected to the db'))
      

app.use("/inventory", require("./routes/inventory.js"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({ errMsg: err.message })
})

app.listen(4800, () => {
    console.log("Running on port 4800.")
})