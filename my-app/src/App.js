import React from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import GameCard from "./components/GameCards";
import cards from "./cards.json";
import './App.css';


// shuffle(cards); console.log(cards);
// let clicked = [];

class App extends React.Component {
  // setting the properties of base
  // initialiazing this.state.cards to cards.json array
  state = {
    cards: cards,
    score: 0,
    topScore: 0,
    hit: false,
    title: "Adventure Time Click Game",
    isClicked: false
  };

  shuffle = (array) => {
    // fisher-yates shuffle code from j
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  click = () => {
    const cardArray = this.state.cards;
    const clickedArr = cardArray.filter(card => card.id === id);
    // if state of click is false
    if(this.isClicked) {
      // set state of click to true
      this.isClicked = true;
      // increase score value by one
      this.setState({ score: this.state.score + 1 });
      // shuffle cards
      this.shuffle(this.state.cards);
      console.log("${this.score}");
    } else { // if state of click is true
      this.setState({ title: "Ooooweee! You guessed wrong!" });
      // reset all isClicked to false
      // log topScore if score is higher than current topScore
      // .then()=>reset score to zero
    }
  };
    
    render() {
      this.shuffle(this.state.cards);
      console.log(cards);
      // this.state.cards.map(card);
      // console.log(card);
      return (
        <Wrapper>
        <Title>{this.state.title}
        <span className="card hit">Card Hit: {this.state.score}</span>
        <ul>
          <li>
            {this.state.score}
          </li>
          <li>
            {this.state.score}
          </li>
        </ul>
        </Title>
        <div className="cardContainer">

        {this.state.cards.map(card => (
          <GameCard 
          id={card.id}
          key={card.id}
          image={card.image}
          isClicked= {this.isClicked}
          // hit= {this.hit}
            />
            
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
