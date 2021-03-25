import React from "react";
import Form from "./Form";
import NameEntry from "./NameEntry";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      names: []
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });

  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState(prevState => ({
      name: "",
      names: [...prevState.names, this.state.name]
    }))

  }

  render() {

    return (
      <div>
        <div className="nameDiv">
          <h1 className="title">Name List</h1>
          <NameEntry names={this.state.names} />
        </div>
        <Form
          name="name"
          placeholder="Full Name"
          value={this.state.name}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>

    )
  }
}
export default App;
