const express = require("express")
const inventoryRouter = express.Router()
const {v4: uuid}= require("uuid")

const inventoryArray = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id:uuid()
    }, {
        name: "pants",
        type: "clothing",
        price: 2500,
        _id:uuid()
    }, {
        name: "basket ball",
        type: "toy",
        price: 1000,
        _id:uuid()
    }, {
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id:uuid()
    }, {
        name: "shirt",
        type: "clothing",
        price: 800,
        _id:uuid()
    }, {
        name: "soup",
        type: "food",
        price: 300,
        _id:uuid()
    }, {
        name: "flour",
        type: "food",
        price: 100,
        _id:uuid()
    }
]
inventoryRouter.get("/", (req,res)=>{
    res.send(inventoryArray)
})

// Get by type
inventoryRouter.get("/search/type", (req, res)=>{
    const type = req.query.type
    const filteredItems= inventoryArray.filter(item => item.type === type)
    res.send(filteredItems)
})

// let lowPrice = req.query.lowPrice || 0;
// let highPrice = req.query.highPrice || 1000000;
// console.log(lowPrice);
// console.log(highPrice);
// const filteredPrice = inventoryArray.filter((item) => {
//     return item.price >= lowPrice && item.price <= highPrice;
// });

module.exports = inventoryRouter