import React from "react";

const NameEntry = props => {

    const nameList = props.names.map(name => <h3>{name}</h3>)

    return (
        <div>
            <ul className="list">{nameList}</ul>
        </div>
    )
}

export default NameEntry;