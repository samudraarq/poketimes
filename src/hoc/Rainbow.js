import React from "react";

function Rainbow(WrappedComponent) {
  const colours = ["red", "yellow", "orange", "blue", "green", "pink"];
  const randomColour = colours[Math.floor(Math.random() * 6)];
  const textColour = randomColour + "-text";

  return (props) => (
    <div className={textColour}>
      <WrappedComponent {...props} />
    </div>
  );
}

export default Rainbow;
