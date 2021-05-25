import React, { useState, useEffect } from "react"
import axios from "axios"
import Bounty from "./components/Bounty.js"
import AddBountyForm from "./components/AddBountyForm.js"

export default function App() {
  const [bountyList, setBounty] = useState([])

  const getBounty = () => {
    axios.get("/bounty")
      .then(res => setBounty(res.data))
      .catch(err => console.log(err))
  }

  const addBounty = (newBounty) => {
    axios.post("/bounty", newBounty)
      .then(res => {
        setBounty(prevBounty => [...prevBounty, res.data])
      })
      .catch(err => console.log(err))
  }

  const deleteBounty = (bountyId) => {
    axios.delete(`/bounty/${bountyId}`)
      .then(res => {
        setBounty(prevBounty => prevBounty.filter(bounty =>
          bounty._id !== bountyId))
      })
      .catch(err => console.log(err))
  }

  const editBounty = (updates, bountyId) => {
    axios.put(`/bounty/${bountyId}`, updates)
      .then(res => {
        setBounty(prevBounty => prevBounty.map(bounty => bounty._id !== bountyId ? bounty : res.data))
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getBounty()
  }, [])

  return (
    <>
      <AddBountyForm
        submit={addBounty}
        btnText="Add Bounty"
        />
      <div className="main-container">
      {bountyList.map(bounty => (
        <Bounty
          {...bounty}
          key={bounty.lastName + bounty._id}
          deleteBounty={deleteBounty}
          editBounty={editBounty} />))}
    </div>
    </>
  )
}

