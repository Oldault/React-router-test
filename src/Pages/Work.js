import "./general.css";
import React from "react";

function Work() {
  return (
    <div className="App">
      <div className="content">
        <h1>Work</h1>
        <div className="black-line"></div>
        <p>
          Convallis aenean et tortor at risus. Egestas integer eget aliquet nibh
          praesent tristique magna. Mollis nunc sed id semper risus in hendrerit
          gravida. Pretium quam vulputate dignissim suspendisse in est ante in
          nibh. Etiam non quam lacus suspendisse faucibus interdum. In ornare
          quam viverra orci sagittis eu volutpat odio. Nisl pretium fusce id
          velit ut tortor pretium. A lacus vestibulum sed arcu non odio euismod
          lacinia. Massa vitae tortor condimentum lacinia. Fermentum iaculis eu
          non diam phasellus vestibulum lorem sed. Sed felis eget velit aliquet
          sagittis. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae.
        </p>
        <img src={require("./chilling cat.jpg")} alt="cat laying" />
      </div>
    </div>
  );
}

export default Work;
