import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import GameCard from "./components/GameCards";
import cards from "./cards.json";
import './App.css';

class App extends Component {
  // initialiazing this.state.cards to cards.json array
  state = {
    cards
  };

  render() {
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
