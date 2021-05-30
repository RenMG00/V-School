const express = require('express')
const bountyRouter = express.Router()
const Bounties = require("./models/bounty.js")


//Get All
bountyRouter.get("/", (req, res, next) => {
    Bounties.find((err, bounty) => {
        if (err) {
            res.status(500)
            return next(err)
        } else {
            return res.status(200).send(bounty)
        }
    })
})

//Get One
bountyRouter.get("/: bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bountyList.find(bounty => bounty._id === bountyId)
    res.send(foundBounty)
})

//Post One
bountyRouter.post("/", (req, res, next) => {
    const newBounty = new Bounties(req.body)
    newBounty.save((err, savedBounty) => {
        if (err) {
            res.status(500)
            return next(err)
        } else {
            return res.status(200).send(savedBounty)
        }
    })
})

//Delete One

bountyRouter.delete("/:bountyId", (req, res) => {
    Bounties.findOneAndDelete({ _id: req.params.bountyId }, deletedBounty => {
        return res.status(200).send(`Successfully deteled.`)
    })
})

//Put One
bountyRouter.put("/:bountyId", (req, res) => {
    Bounties.findOneAndUpdate({ _id: req.params.bountyId }, req.body, {new: true}, updatedBounty => {
        return res.status(200).send(updatedBounty)
    })
})

module.exports = bountyRouter