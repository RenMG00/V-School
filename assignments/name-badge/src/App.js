import React from "react";
import Form from "./Form";
import BadgeList from "./BadgeList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      birthPlace: "",
      phone: "",
      favFood: "",
      aboutMe: "",
      disabled: true,
      badges: []
    };
  }

  handleChange = e => {
    this.setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  handleSubmit = e => {
    e.preventDefault();

    const badge = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      birthPlace: this.state.birthPlace,
      phone: this.state.phone,
      favFood: this.state.favFood,
      aboutMe: this.state.aboutMe
    };

    this.setState(prevState => ({
      firstName: "",
      lastName: "",
      email: "",
      birthPlace: "",
      phone: "",
      favFood: "",
      aboutMe: "",
      disabled: false,
      badges: [...prevState.badges, badge]
    }))

    console.log(badge)
  }

  render() {

    return (
      <div>
        <Form
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          birthPlace={this.state.birthPlace}
          phone={this.state.phone}
          favFood={this.state.favFood}
          aboutMe={this.state.aboutMe}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          disabled={this.state.disabled}
        />
        <div>
          <BadgeList badges={this.state.badges} />
        </div>
      </div>

    )
  }
}
export default App;

