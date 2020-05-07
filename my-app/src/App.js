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

// shuffle(cards); console.log(cards);
// let clicked = [];

class App extends Component {
  // initialiazing this.state.cards to cards.json array
  state = {
    cards: cards,
    score: 0,
  };


  // editScore = () => {
  //   clicked.push(cards.id);

  //   this.setState({ score: this.state.score + 1 });
  // }
  
  render() {
    shuffle(cards);
    console.log(cards);
    // this.state.cards.map(card);
    // console.log(card);
    return (
      <Wrapper>
        <Title>Adventure Time Click Game</Title>
        <div className="cardContainer">

        {this.state.cards.map(card => (
          <GameCard 
            id={card.id}
            key={card.id}
            image={card.image}
            hit={this.hit}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
