import React, { useState } from "react"
import AddBountyForm from "./AddBountyForm.js"

export default function Bounty(props) {
    const { firstName, lastName, living, reward, type, _id } = props
    const [editToggle, setEditToggle] = useState(false)

    return (
        <div className="bounty-container">
            { !editToggle ?
                <>
                    <h3>Name: {firstName} {lastName}</h3>
                    <p>Alive: {living}</p>
                    <p>Reward: {reward}</p>
                    <p>Type: {type}</p>
                    <button onClick={() => props.deleteBounty(_id)}>Delete</button>
                    <button className="edit-btn"
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Edit</button>
                </>
                :
                <>
                    <AddBountyForm
                        firstName={firstName}
                        lastName={lastName}
                        living={living}
                        reward={reward}
                        type={type}
                        _id={_id}
                        btnText="Submit Edit"
                        submit={props.editBounty}
                    />
                    <button className="cancel-btn"
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Close
                        </button>
                </>
            }
        </div>
    )
}