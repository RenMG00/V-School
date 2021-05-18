import React from "react";

const Form = props => {

    return (
        <form className="myForm" onClick={props.handleSubmit}>
            <input 
                name={props.name}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder} 
            />
            <button className="button">Add Name</button>
        </form>
    );
}


export default Form;