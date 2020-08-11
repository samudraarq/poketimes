import React from "react";
import { Link } from "react-router-dom";
import Pokeball from "../pokeball.png";
import { connect } from "react-redux";

function Home({ posts }) {
  const postList = posts.length ? (
    posts.map((post) => {
      return (
        <div className="post card" key={post.id}>
          <img src={Pokeball} alt="a pokeball" />
          <div className="card-content">
            <Link to={"/" + post.id}>
              <span className="card-title red-text">{post.title}</span>
            </Link>
            <p>{post.body}</p>
          </div>
        </div>
      );
    })
  ) : (
    <div className="center">No Post Found</div>
  );

  return (
    <div className="container home">
      <h1 className="center">Home</h1>
      {postList}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(Home);
