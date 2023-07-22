import React, { useState, useRef } from "react";
import CreateNewPost from "./CreateNewPost";
import Post from "./Post";
import ModifyPost from "./ModifyPost"
import Navbar from "./Navbar";
// import Carousel from "./Carousel";
import "./NewBlog.css";
import background from "../assets/background2.jpg";

const NewBlogs = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [isCreateNewPost, setIsCreateNewPost] = useState(false);
  const [isModifyPost, setIsModifyPost] = useState(false);
  const [editPostId, setEditPostId] = useState("");

  // Initialize useRef
  const getTitle = useRef();
  const getContent = useRef();

  const savePostTitleToState = event => {
    setTitle(event.target.value);
  };
  const savePostContentToState = event => {
    setContent(event.target.value);
  };
  const toggleCreateNewPost = () => {
    setIsCreateNewPost(!isCreateNewPost);
  };
  const toggleModifyPostComponent = () => {
    setIsModifyPost(!isModifyPost)
  }
  const editPost = id => {
    setEditPostId(id);
    console.log(id)
    toggleModifyPostComponent();
  };
  const deletePost = id => {
    const modifiedPost = allPosts.filter(eachPost => {
      return eachPost.id !== id;
    });
    setAllPosts(modifiedPost);
  };
  const updatePost = (event) => {
    event.preventDefault();
    const updatedPost = allPosts.map(eachPost => {
      if (eachPost.id === editPostId) {
        console.log([eachPost.id, editPostId] )
        return {
          ...eachPost,
          title: title || eachPost.title,
          content: content || eachPost.content
        };
      }
      console.log(eachPost)
      return eachPost;
    });
    setAllPosts(updatedPost);
    toggleModifyPostComponent();
  };
  const savePost = event => {
    event.preventDefault();
    const id = Date.now();
    setAllPosts([...allPosts, { title, content, id }]);
    console.log(allPosts);
    setTitle("");
    setContent("");
    getTitle.current.value = "";
    getContent.current.value = "";
    toggleCreateNewPost();
  };
  if (isCreateNewPost) {
    return (
      <>
      
        <CreateNewPost
          savePostTitleToState={savePostTitleToState}
          savePostContentToState={savePostContentToState}
          getTitle={getTitle}
          getContent={getContent}
          savePost={savePost}
          deletePost={deletePost}
        />
      </>
    );
  }
  else if (isModifyPost) {
    const post = allPosts.find(post => {
      return post.id === editPostId;
    });
    return (
      <ModifyPost
        title={post.title}
        content={post.content}
        updatePost={updatePost}
        savePostTitleToState={savePostTitleToState}
        savePostContentToState={savePostContentToState}
      />
    );
  }
  return (
    <>
    <Navbar/>
    <div className="bg">
      <img src={background} alt="bg" />
      <div className="text">
      <h1>Have An Amazing Blog Idea?</h1>
      <p>Create Your Own Blog</p>  
      </div>
  
    </div>
      {!allPosts.length ? (
        <section className="no-post">
          <h1>No Post Found!</h1>
          <h3>There is nothing to see here.</h3>
          <br />
      <br />
          <section className="button-wrapper">
      <button onClick={toggleCreateNewPost} className="button">Create New</button>
      </section>
        </section>
      ) 
      : (
      <div className="your-post" ><h1>Your Blogs</h1>
        <section className="all-post">
        {allPosts.map(eachPost => {
          return (
            <Post
              id={eachPost.id}
              key={eachPost.id}
              title={eachPost.title}
              content={eachPost.content}
              editPost={editPost}
              deletePost={deletePost}
            />
          );
        })}
      <section className="button-wrapper">
      <button onClick={toggleCreateNewPost} className="createbtn">Create New</button>
      </section>
        </section>
        
        <div className="footer">
        <h1>BLOGGERS</h1>
      <p> COPYRIGHT © </p>
      <p>CONTACT US</p>
        </div>
        </div>
        
      )}

      
    </>
  );
};


export default NewBlogs


// import React from 'react';
// import { useState } from 'react';
// import Navbar from './Navbar';
// import "./NewBlog.css"

// import Carousel from './Carousel'

// const NewBlogs = ({onAddBlog}) => {
//   const[title,setTitle]=useState('');
//   const[content, setContent]=useState('');

//   const handleSubmit=(e)=>{
//     e.preventDefault();
//     console.log('onAddBlog props value: ', onAddBlog);


    // onAddBlog(newBlog);

    //validating the form fields
    // if(!title|| !content){
    //   alert('Please fill all the fields');
    //   return;
    // }

    // new blog object
    // const newBlog={
    //   title,
    //   content,
    // date: new Date().toLocaleDateString(),
    // };
    // callING the onAddblog function from the parent component to add the new blog
    // onAddBlog(newBlog); 

    //clearing the form fields
  //   setTitle('');
  //   setContent('');
  // };
  // const[newBlogs,setBlogs]=useState([{}]);
  // const handleAddBlog=(newBlog)=>{
  //   setBlogs([newBlog]);
  // };

  // return (
  //   <>
  //   <Navbar/>
  //   <div>
        {/* <Carousel/> */}
//         <div className='blogForm'>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor='title'>Blog Title: </label>
//           <input type='text' id='title' placeholder='Enter the title' value={title}
//              onChange={(e)=>setTitle(e.target.value)} required/>

//           <label htmlFor='content'>Blog Content: </label>
//           <textarea id='content' placeholder='Enter the content' value={content}
//             onChange={(e)=> setContent(e.target.value)} required ></textarea>
        
//         <button type='submit'>Submit Blog</button>

        
//         </form>
//         </div>
//      <div>
//          onAddBlog={handleAddBlog}
//      </div>
//     </div>
//     </>
//   )
// }

// export default NewBlogs