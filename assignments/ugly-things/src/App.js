import React from "react";
import './App.css';
import UglyThing from "./UglyThing"
import { withThing } from './ContextProvider';

class App extends React.Component {
  state = {
      title: "",
      description: "",
      imgUrl: ""
  }

  componentDidMount() {
    this.props.getThings();
  }

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  handleSubmit = e => {
    e.preventDefault();

    this.props.postThing({
      title: this.state.title,
      description: this.state.description,
      imgUrl: this.state.imgUrl
    })
  }

  render() {

    const { things } = this.props

    const mappedThings = things.map(thing => <UglyThing
      key={thing.title}
      {...thing}
      putThing={this.props.putThing}
      deleteThing={this.props.deleteThing}
    />)

    return <div>
      <form className="entryForm">
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
          placeholder="title"
          required
        />
        <input
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
          placeholder="description"
          required
        />
        <input
          type="text"
          name="imgUrl"
          value={this.state.imgUrl}
          onChange={this.handleChange}
          placeholder="imgUrl"
          required
        />
        <button onClick={this.handleSubmit}>Add</button>
      </form>
      {mappedThings}
    </div>
  }
}
export default withThing(App);
