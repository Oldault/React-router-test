import "./general.css";
import React from "react";

function About() {
  return (
    <div className="App">
      <div className="content">
        <h1>About</h1>
        <div className="black-line"></div>
        <p>
          Eget aliquet nibh praesent tristique magna sit amet purus. Amet
          facilisis magna etiam tempor orci eu lobortis elementum nibh. Nibh
          tellus molestie nunc non blandit massa enim nec. Bibendum at varius
          vel pharetra. Augue eget arcu dictum varius. Suspendisse sed nisi
          lacus sed viverra. Mauris commodo quis imperdiet massa tincidunt nunc.
          Eros in cursus turpis massa tincidunt dui. Turpis egestas maecenas
          pharetra convallis. Metus dictum at tempor commodo. Sit amet volutpat
          consequat mauris nunc congue nisi vitae. Enim lobortis scelerisque
          fermentum dui faucibus in ornare. Aliquet eget sit amet tellus cras
          adipiscing enim eu. A erat nam at lectus urna duis convallis.
        </p>
        <img src={require("./snack.jpg")} alt="Hmmmm" />
      </div>
    </div>
  );
}

export default About;
