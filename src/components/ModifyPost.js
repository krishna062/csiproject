import React from "react";
import Navbar from "./Navbar";
const ModifyPost = (props) => {
  return (
    <>
    <Navbar/>
    <section className="create-post">
      <form>
        <h1>Modify Post</h1>
        <input className="title-input "type='text'
          defaultValue={props.title}
          onChange={props.savePostTitleToState}
          text
          placeholder="title"
          size="39"
        ></input>
        <br />
        <br />
        <textarea
        className="content-input"
          defaultValue={props.content}
          placeholder="content"
          onChange={props.savePostContentToState}
          rows="8"
          cols="41"
        ></textarea>
        <br />
        <br />
        <section className="button-wrapper">
        <button className="button" onClick ={props.updatePost}>Update Post</button>
        </section>
      </form>
      </section>
    </>
  );
};
export default ModifyPost;