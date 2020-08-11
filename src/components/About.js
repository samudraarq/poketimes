import React from "react";
// import { useHistory } from "react-router-dom";
import Rainbow from "../hoc/Rainbow";

function About() {
  // const history = useHistory();
  // setTimeout(() => {
  //   history.push("/");
  // }, 2000);

  return (
    <div className="container">
      <h1 className="center">About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        ipsa aperiam, voluptatum nam delectus voluptates sapiente voluptatem,
        recusandae ullam esse officiis a optio rerum officia, quia soluta
        possimus deleniti. Beatae?
      </p>
    </div>
  );
}

export default Rainbow(About);
