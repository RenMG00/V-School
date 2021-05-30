const express = require("express")
const inventoryRouter = express.Router()
const Inventory = require("../models/inventory.js")

inventoryRouter.get("/", (req, res, next) => {
    Inventory.find((err, inventory) => {
        console.log("Test")
        if (err) {
            res.status(500)
            return next(err)
        } else {
            return res.status(200).send(inventory)
        }
    })
})

inventoryRouter.post("/", (req, res, next) => {
    const newItem = new Inventory(req.body)
    newItem.save((err, savedItem) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedItem)
    })
})

inventoryRouter.delete("/:inventoryId", (req, res, next) => {
    Inventory.findOneAndDelete({ _id: req.params.inventoryId }, deletedItem => {
        return res.status(200).send(`Successfully deteled.`)
    })
})

inventoryRouter.put("/:inventoryId", (req, res, next) => {
    Inventory.findOneAndUpdate(
        { _id: req.params.inventoryId }, req.body, { new: true }, updatedInventory => {
            return res.status(200).send(updatedInventory)
        }
    )
})

module.exports = inventoryRouter