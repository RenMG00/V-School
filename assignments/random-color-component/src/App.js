import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      color: "",
      isLoading: true
    }
  }


  componentDidMount() {
    axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then(res => {
        console.log(res.data.colors[0].tags[0].name)
        this.setState({
          color: res.data.colors[0].tags[0].name,
          isLoading: false
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {

    if (this.state.isLoading) {
      return (
        <div></div>
      )
    } else {
      console.log(this.state.color)
      return (
        <div style={{
          backgroundColor: this.state.color,
          border: "2px dotted red",
          width: "500px",
          height: "500px"
        }}
          className="colorDiv">
        </div>
      );
    }
  }
}
export default App;
