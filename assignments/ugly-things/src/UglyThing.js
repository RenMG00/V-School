import React from "react";

class UglyThing extends React.Component {
    state = {
        title: "",
        description: "",
        imgUrl: "",
        isEditing: false
    }

    handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

    switchEditMode = () => {
        this.setState(({
            isEditing: true
        }))
    }
    delete = id => { this.props.deleteThing(id) }

    render() {

        const {thing, _id ,title, description, imgUrl } = this.props;

        console.log(_id)
        if (this.state.isEditing === true) {
            return (
                <div>
                    <div className="ugly-container">
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <img src={imgUrl} alt={description}></img>
                        <br />
                        <button onClick={() => this.delete(_id)}>Delete</button>
                    </div>
                    <form className="editForm">
                        <input
                            type="text"
                            name="title"
                            value={this.state.name}
                            onChange={this.handleChange}
                            placeholder="title"
                            required
                        />
                        <input
                            type="text"
                            name="description"
                            value={this.state.name}
                            onChange={this.handleChange}
                            placeholder="description"
                            required
                        />
                        <input
                            type="text"
                            name="imgUrl"
                            value={this.state.name}
                            onChange={this.handleChange}
                            placeholder="imgUrl"
                            required
                        />
                        <button onClick={(e) => {
                            e.preventDefault()
                            this.props.putThing(
                                thing,
                                _id,
                                this.state.title,
                                this.state.description,
                                this.state.imgUrl)
                        }}>Save Edit</button>
                    </form>
                </div>
            )
        } else {
            return (
                <div className="ugly-container">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <img src={imgUrl} alt={description}></img>
                    <br />
                    <button onClick={() => this.switchEditMode()}>Edit</button>
                    <button onClick={() => this.delete(_id)}>Delete</button>
                </div>
            )
        }
    }
}

export default UglyThing;