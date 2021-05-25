import React, { useState } from "react"

export default function AddBountyForm(props) {

    const intiInputs = {
        firstName: props.firstName || "",
        lastName: props.lastName || "",
        living: props.living || false,
        reward: props.reward || "",
        type: props.type || ""
    }
    const [inputs, setInputs] = useState(intiInputs)

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(intiInputs)
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                value={inputs.firstName}
                onChange={handleChange}
                placeholder="First Name"
            />
            <input
                type="text"
                name="lastName"
                value={inputs.lastName}
                onChange={handleChange}
                placeholder="Last Name"
            />
            <select name="living" value={inputs.living} onChange={handleChange} placeholder="Living">
                <option value={true}>Dead</option>
                <option value={false}>Alive</option>
            </select>
            <input
                type="number"
                name="reward"
                value={inputs.reward}
                onChange={handleChange}
                placeholder="Reward"
            />
            <input
                type="text"
                name="type"
                value={inputs.type}
                onChange={handleChange}
                placeholder="Jedi or Sith?"
            />
            <button className="add-button">{props.btnText}</button>
        </form>
    )
}