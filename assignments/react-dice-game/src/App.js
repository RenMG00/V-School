import React from "react";
import DiceBox from "./DiceBox";
import Button from "./Button";


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numArr: [0, 0, 0, 0, 0, 0]
    }
  }

RollDice = () => {
  console.log(this.state.num1)
  let randomNumArray = this.state.numArr.map(() => Math.floor((Math.random() * 6) + 1));
  
  this.setState(() => {
    return {
      numArr: randomNumArray
    }
  })
 
}

render() {
  return (
    <div>
      <div>
        <DiceBox props={this.state}/>
      </div>
      <div className="buttonDiv">
        <Button method={this.RollDice} name={"Roll"} />
      </div>

    </div>
  )
}
}
export default App;
