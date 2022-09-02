import "./general.css";
import React from "react";

function Home() {
  return (
    <div className="App">
      <h1>Home</h1>
      <div className="black-line"></div>
      <p>
        Mauris augue neque gravida in. Nulla porttitor massa id neque aliquam
        vestibulum. Fames ac turpis egestas maecenas pharetra convallis. Enim
        blandit volutpat maecenas volutpat blandit aliquam etiam erat. Odio
        morbi quis commodo odio aenean sed adipiscing diam donec. Ut pharetra
        sit amet aliquam id. Dis parturient montes nascetur ridiculus mus mauris
        vitae. Pretium fusce id velit ut tortor pretium. Bibendum neque egestas
        congue quisque egestas diam. Aenean vel elit scelerisque mauris
        pellentesque pulvinar pellentesque. Quam adipiscing vitae proin sagittis
        nisl rhoncus mattis. Mi tempus imperdiet nulla malesuada pellentesque
        elit eget gravida. Odio eu feugiat pretium nibh ipsum.
      </p>
      <img src={require("./Monkey_on_skateboard.jpg")} alt="monkey skateboarding"/>
    </div>
  );
}

export default Home;
