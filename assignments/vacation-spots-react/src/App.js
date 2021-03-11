import React from 'react';
import Card from "./Card";
import vacationSpots from "./vacationSpots";

const App = () => {
  const vacationCards = vacationSpots.map(card => <Card key={card.place} vacationSpots={card} />)

  return (
    <div>
      <h1 style = {{fontSize: 45, fontFamily: "Tahoma", textShadow: "2px 2px gray"}}>Vacation Spots</h1>
      {vacationCards}
    </div >
  )
};


export default App;
