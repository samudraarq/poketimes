import React from "react";
import { connect } from "react-redux";
import { deletePost } from "../actions/postActions";

function Post({ post, deletePost, history }) {
  const handleClick = () => {
    deletePost(post.id);
    history.push("/");
  };

  const postToDisplay = post ? (
    <div className="post">
      <h4 className="center">{post.title}</h4>
      <p>{post.body}</p>
      <button className="btn grey" onClick={handleClick}>
        Delete
      </button>
    </div>
  ) : (
    <h4 className="center">Loading post...</h4>
  );

  return <div className="container">{postToDisplay}</div>;
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find((post) => post.id === id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
