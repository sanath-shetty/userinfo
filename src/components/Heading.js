import React from "react";

const Heading = (props) => {
  return (
    <div className="jumbotron text-center">
      <h1>{props.head}</h1>
      <p>{props.para}</p>
    </div>
  );
};

export default Heading;
