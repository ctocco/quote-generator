import React from "react";

function Button(props) {
  return (
    <div>
      <button onClick={props.click}>New Quote</button>
    </div>
  );
}

export default Button;
