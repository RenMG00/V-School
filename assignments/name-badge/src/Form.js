import React from "react";

const Form = props => {

    const {firstName, lastName, email, birthPlace, phone, favFood, aboutMe, handleChange, handleSubmit } = props
    return (
        <form className="myForm" onSubmit={handleSubmit}>
            <input 
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleChange}
                placeholder="First Name"
                minLength="3"
                required
            />
            <input 
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleChange}
                placeholder="Last Name"
                minLength="3" 
                required
            />
            <br></br>
            <input 
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="email"
                minLength="3"
                required
            />
            <input 
                type="text"
                name="birthPlace"
                value={birthPlace}
                onChange={handleChange}
                placeholder="Place of Birth"
                minLength="3"
                required
            />
            <br></br>
            <input 
                type="number"
                name="phone"
                value={phone}
                onChange={handleChange}
                placeholder="Phone 0001112222"
                minLength="3"
                maxLength="10"
                required
            />
            <input 
                type="text"
                name="favFood"
                value={favFood}
                onChange={handleChange}
                placeholder="Favorite Food"
                minLength="3"
                required
            />
            <br></br>
             
             <textarea 
                    type="textarea"
                    name="aboutMe"
                    value={aboutMe}
                    onChange={handleChange}
                    placeholder="Tell Us About Yourself.."
                    cols="68"
                    rows="6"
                    minLength="3"
                    required
                />
                <br></br>
            <button className="button">Create Badge</button>
        </form>
    );
}

export default Form;