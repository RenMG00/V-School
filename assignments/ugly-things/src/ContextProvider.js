import React from "react";
import axios from "axios";

const { Provider, Consumer } = React.createContext();

class ContextProvider extends React.Component {

    constructor() {
        super();
        this.state = {
            things: []
        }
    }

    getThings = () => {
        axios.get("https://api.vschool.io/rengian/thing")
            .then(res => {
                console.log(res.data)
                this.setState({
                    things: res.data
                });
            })
            .catch(err => console.log(err));

    }

    postThing = thing => {
        axios.post("https://api.vschool.io/rengian/thing", thing)
            .then(res => {
                console.log(res.data)
                this.setState(prevState => ({
                    things: [...prevState.things, thing]
                }));
            })
            .catch(err => console.log(err));
    }

    putThing = (thing, id, title, description, imgUrl) => {
        const editedObj = {
            "thing": thing,
            "title": title,
            "description": description,
            "imgUrl": imgUrl
        }
        console.log(editedObj)
        axios.put("https://api.vschool.io/rengian/thing/"+id, editedObj)
            .then(res => {
                console.log(res)
                this.setState(prevState => ({
                    things: [...prevState.things, editedObj]
                }));
                this.getThings()
            })
            .catch(err => console.log(err));
    }

    deleteThing = id => {
        axios.delete("https://api.vschool.io/rengian/thing/" + id)
            .then(res => {
                this.setState(prevState => ({
                    things: [...prevState.things.filter(thing => thing._id !== id)]
                }));
            })
            .catch(err => console.log(err));
    }

    render() {
        return <Provider value={{
            things: this.state.things,
            getThings: this.getThings,
            postThing: this.postThing,
            putThing: this.putThing,
            deleteThing: this.deleteThing,
        }}>
            {this.props.children}
        </Provider>;
    }
}

export default ContextProvider;

export const withThing = Component => props => {
    return <Consumer>
        {value => <Component {...value} {...props} />}
    </Consumer>;
}