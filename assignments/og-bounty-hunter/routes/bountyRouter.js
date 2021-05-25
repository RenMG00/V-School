const express = require('express')
const bountyRouter = express.Router()
const { v4: uuidv4 } = require('uuid');

const bountyList = [
    { firstName: "Qui-Gon", lastName: "Jinn", living: "false", reward: 0, type: "Jedi", _id: uuidv4() },
    { firstName: "Savage", lastName: "Opress", living: "true", reward: 10000, type: "Sith", _id: uuidv4() },
    { firstName: "Darth", lastName: "Bane", living: "true", reward: 15000, type: "Sith", _id: uuidv4() },
    { firstName: "Plo", lastName: "Koon", living: "true", reward: 5000, type: "Jedi", _id: uuidv4() }
]

//Get All
bountyRouter.get("/", (req, res) => {
    res.send(bountyList)
})

//Get One
bountyRouter.get("/: bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bountyList.find(bounty => bounty._id === bountyId)
    res.send(foundBounty)
})

//Post One
bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bountyList.push(newBounty)
    res.send (newBounty)
})

//Delete One

bountyRouter.delete("/:bountyId" , (req, res) =>{
    const bountyId = req.params.bountyId
    const bountyIndex = bountyList.findIndex(bounty => bounty._id === bountyId)
    bountyList.splice(bountyIndex, 1)
    res.send("successfully deleted")
})

//Put One
bountyRouter.put("/:bountyId" , (req, res) =>{
    const bountyId = req.params.bountyId
    const updateBounty = req.body
    const bountyIndex = bountyList.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bountyList[bountyIndex], updateBounty)
    res.send(updatedBounty)
})

module.exports = bountyRouter