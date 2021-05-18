import React from "react"
import friends from "./friends"
import Friend from "./Friend"

const FriendList = () => {

    const friendList = friends.map(friend => <Friend key={friend.name} {...friend} />)

    return (
        <div>
            {friendList}
        </div>
    )
}



export default FriendList