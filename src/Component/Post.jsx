import React from "react";

const Post = (post) => {
  const { id, body, title } = post.post;

  return (
    <div>
      <p>ID: {id}</p>
      <p>Body :{body}</p>
      <p>Title: {title}</p>
      <button>Show Details</button>
    </div>
  );
};

export default Post;
