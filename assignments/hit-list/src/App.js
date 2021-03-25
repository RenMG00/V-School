import React, { Component } from "react"


class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      hitTargets: []
    }
  }

  componentDidMount() {
    this.setState({ loading: true })
    fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          hitTargets: data
        })
      })
  }

  render() {

    return (
      <div>
        <h1>Don Corleone's Hit List</h1>
        <div className="hitCard">
        {this.state.hitTargets.map((person, i) => {
          return (
            <ul key={i} className='hitList'>
              <p className='personName'>{person.name} </p>
              <br></br>
              <img className="img" src={person.image}></img>
            </ul>
          );
        })}
        </div>
      </div>
    )
  }
}
export default App;
