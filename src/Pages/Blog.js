import "./general.css";
import React from "react";

function Blog() {
  return (
    <div className="App">
      <div className="content">
        <h1>Blog</h1>
        <div className="black-line"></div>
        <p>
          Enim ut sem viverra aliquet eget sit amet. Pellentesque elit eget
          gravida cum. Elit scelerisque mauris pellentesque pulvinar pellentesque
          habitant morbi tristique. Vulputate odio ut enim blandit volutpat
          maecenas volutpat. Eleifend mi in nulla posuere sollicitudin aliquam
          ultrices sagittis orci. Mi in nulla posuere sollicitudin aliquam
          ultrices. Urna id volutpat lacus laoreet non curabitur gravida arcu.
          Aliquam faucibus purus in massa tempor nec feugiat. Elit duis tristique
          sollicitudin nibh sit amet commodo nulla facilisi. Nam libero justo
          laoreet sit. Egestas diam in arcu cursus euismod quis viverra nibh. Diam
          sollicitudin tempor id eu nisl. At augue eget arcu dictum.
        </p>
        <img src={require("./Thirsty_bear.jpg")} alt="bear drinking"/>
      </div>
    </div>
  );
}

export default Blog;
