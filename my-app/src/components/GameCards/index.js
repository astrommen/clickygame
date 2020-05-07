import React from "react";


function GameCard(props) {
  return (
    <div className="card">
      <div className="img-container" >
        <img alt={props.name} src={props.image} onClick={()=>{props.handleHit(props.hit)}} />
      </div>
    </div>
  );
}

export default GameCard;

