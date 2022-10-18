import React from "react";

function Les(props) {
  return (
    <span className="p1" id={props.id} key={props.index} style={props.myStyle}>
      {props.les}
    </span>
  );
}

export default Les;
