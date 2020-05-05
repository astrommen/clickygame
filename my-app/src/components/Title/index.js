import React from "react";

function Title(props) {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>{props.children}</h1>
      </div>
    </div>
  );
}

export default Title;