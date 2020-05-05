import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import GameCard from "./components/GameCards";
import cards from "./cards.json";
import './App.css';


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(cards); console.log(cards);

class App extends Component {
  // initialiazing this.state.cards to cards.json array
  state = {
    cards
  };
  
  shuffle = (cards) => {
    for (let i = cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  }
  
  render() {
    shuffle(cards);
    console.log(cards);
    // this.state.cards.map(card);
    // console.log(card);
    return (
      <Wrapper>
        <Title>Adventure Time Click Game</Title>
        {this.state.cards.map(card => (
          <GameCard 
            id={card.id}
            key={card.id}
            image={card.image}
            />
            ))}
      </Wrapper>
    );
  }
}

export default App;
