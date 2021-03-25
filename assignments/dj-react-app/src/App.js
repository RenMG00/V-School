import React from "react";
import Buttons from "./Buttons";
import Boxes from "./Boxes";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      box1: "white",
      box2: "white",
      box3: "white",
      box4: "white"
    };
  }

  toggle = () => {
    let newColor;

    switch (this.state.box1) {
      case "black":
        newColor = "white";
        break;
      case "white":
        newColor = "black";
        break;
      default:
        newColor = "black";
        break;

    }
    this.setState(
      {
        box1: newColor,
        box2: newColor,
        box3: newColor,
        box4: newColor
      }
    );
  }

  bottomLeftBlue = () => {
    this.setState({
      box2: "#406299"
    });
  }

  bottomRightBlue = () => {
    this.setState(
      {
        box4: "#406299"
      }
    );
  }

  changePurple = () => {

    this.setState(
      {
        box1: "#BA55D3",
        box3: "#BA55D3"
      }
    );
  }

  changeYellow = () => {

    this.setState(
      {
        box1: "#FFD700"
      }
    );
  }

  changeRed = () => {
    this.setState(
      {
        box2: "#B22222"
      }
    );
  }

  changeGreen = () => {
    this.setState(
      {
        box3: "#3CB371"
      }
    );
  }
  changeOrange = () => {
    this.setState(
      {
        box4: "#FF8C00"
      }
    );
  }
  
  render = () => {
    const divStyle = {
      display: "grid",
      gridTemplateRow: "1fr",
      gridTemplateColumn: "1fr",
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      margin: "50px auto"
    };

    return <div>
      <div className="gridDiv">
        <div className="gridTop">
          <Boxes color={this.state.box1} />
          <Boxes color={this.state.box2} />
        </div>
        <div className="gridBottom">
          <Boxes color={this.state.box3} />
          <Boxes color={this.state.box4} />
        </div>
      </div>
      <div style={divStyle}>
        <Buttons method={this.toggle} name={"Small Time DJ"} />
        <Buttons method={this.changePurple} name={"Party DJ"} />
        <Buttons method={this.bottomLeftBlue} name={"Left Blue"} />
        <Buttons method={this.bottomRightBlue} name={"Right Blue"} />
        <Buttons method={this.changeRed} name={"Big-Time DJ Red"} />
        <Buttons method={this.changeYellow} name={"Big-Time DJ Yellow"} />
        <Buttons method={this.changeGreen} name={"Big-Time DJ Green"} />
        <Buttons method={this.changeOrange} name={"Big-Time DJ Orange"} />
      </div>
    </div>;
  }
}

export default App;
