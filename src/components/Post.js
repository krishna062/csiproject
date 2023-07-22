import React from "react";
import "./post.css";

const Post = ({ title, content, editPost, id, deletePost }) => {
  return (
    <>
      <section className="post-container">
        <h2>{title}</h2>
        <p className="post-content"> {content}</p>
        <div>
        <button className="mod-button" onClick={() => editPost(id)}>Edit</button>
        <button className="mod-button" onClick={() => deletePost(id)}>Delete</button>
        </div>
      </section>
    </>
  );
};
export default Post;