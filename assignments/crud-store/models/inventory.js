const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    name: {
        type: String,
        required : true
    },
    cost: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("Inventory", inventorySchema)