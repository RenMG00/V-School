import React from "react";
import NameBadge from "./NameBadge";

const BadgeList = props => {

    const peopleList = props.badges.map((badge, i) => <NameBadge key = {i} {...badge} />);
         
    return (
        <div>
            {peopleList}
        </div>
    )
}

export default BadgeList;