import React from "react";
import "./CreateNew.css";
import Navbar from "./Navbar";
const CreateNewPost = props => {
  return (
    <>
    <Navbar/>
    <section className="create-post">
      <form onSubmit={props.savePost}>
        <h1>Create New Post</h1>
        <input
        className="title-input"
          type="text"
          onChange={props.savePostTitleToState}
          placeholder="Title"
          size="39"
          required
          ref={props.getTitle}
        ></input>
        <br />
        <br />
        <textarea
        className="content-input"
          onChange={props.savePostContentToState}
          placeholder="Content"
          rows="20"
          cols="41"
          required
          ref={props.getContent}
        ></textarea>
        <br />
        <br />
        <section className="button-wrapper">
        <button className="button">Save Post</button></section>
      </form>
      </section>
    </>
  );
};
export default CreateNewPost;