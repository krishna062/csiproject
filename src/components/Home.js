import React from 'react'
import {useState} from 'react'
import "./HomeStyles.css"
import Navbar from './Navbar'
import BlogCard from './BlogCard';
import FilterBlogs from './FilterBlogs';



const Home = () => {

  const[blogs,setBlogs]=useState([{
    id:1,
    catagory:"Technology",
    title:"React Js an amazing library",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat debitis vel cumque sunt nesciunt, quidem eveniet quasi, amet beatae animi ea officia reiciendis libero fugit facere nostrum ullam doloribus Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat debitis vel cumque sunt nesciunt, quidem eveniet quasi, amet beatae animi ea officia reiciendis libero fugit facere nostrum ullam doloribus Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat debitis vel cumque sunt nesciunt, quidem eveniet quasi, amet beatae animi ea officia reiciendis libero fugit facere nostrum ullam doloribus Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat debitis vel cumque sunt nesciunt, quidem eveniet quasi, amet beatae animi ea officia reiciendis libero fugit facere nostrum ullam doloribus!",
    date:"12/6/2021",
  },
  {
    id:2,
    catagory:"Fashion",
    title:"Must have fashion accessories in 2023",
    content:<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat debitis vel cumque sunt nesciunt, quidem eveniet quasi, amet beatae animi ea officia reiciendis libero fugit facere nostrum ullam doloribus!</p>,
    date:"25/5/2023"
  },
  { 
    id:3,
    catagory:"Travel",
    title:"Must visit places in India",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat debitis vel cumque sunt nesciunt, quidem eveniet quasi, amet beatae animi ea officia reiciendis libero fugit facere nostrum ullam doloribus!",
    date:"1/10/2021"
  },
  {
    id:4,
    catagory:"Food",
    title:"Best food in the world",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat debitis vel cumque sunt nesciunt, quidem eveniet quasi, amet beatae animi ea officia reiciendis libero fugit facere nostrum ullam doloribus!",
    date:"5/3/2022"
  },
  {
    id:5,
    catagory:"Fashion",
    title:"Fashion trends in 2023",
    content:<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat debitis vel cumque sunt nesciunt, quidem eveniet quasi, amet beatae animi ea officia reiciendis libero fugit facere nostrum ullam doloribus!</p>,
    date:"2/5/2023"
  },
 
]);

// const handlelogout=()=>{
//   localStorage?.removeItem("authToken");
//   window.location.reload();
// }
// const[filterValue,setFilterTextValue]=useState("All");

// const filteredBlogsList= blogs.filter((blog)=>{
//   if(filterValue=== 'Travel'){
//     return blog.catagory==='Travel';
//   }
//   else if(filterValue=== 'Fashion'){
//     return blog.catagory==='Fashion';
//   }
//   else if(filterValue=== 'Food'){
//     return blog.catagory==='Food';
//   }
//   else if(filterValue=== 'Technology'){
//     return blog.catagory==='Technology';
//   }
//   else{
//     return blog;
//   }
// })

// const onFilterValueSelected=(filterValue)=>{
    //  console.log(filterValue);
      // setFilterTextValue(filterValue);
// }

  return (
    <>
    <Navbar/>
    <div className='blog-posts'>
      <div className='search-box'>
      <input type="text" placeholder='Search Blogs'className='search-input' name='search'></input>
      </div>

      
      {/* <div>
      <FilterBlogs filterValueSelected={onFilterValueSelected}/>
      </div> */}

      {blogs.map((blog)=>(
        <BlogCard
        key={blog.id}
        catagory={blog.catagory}
        title={blog.title}
        content={blog.content}
        date={blog.date}
        />

          /* {blogs.map((filteredBlogsList)=>(
        <BlogCard
        key={filteredBlogsList.id}
        catagory={filteredBlogsList.catagory}
        title={filteredBlogsList.title}
        content={filteredBlogsList.content}
        date={filteredBlogsList.date}
        /> */
      ))}
      {/* <button onClick={handlelogout}>Logout</button> */}
      
    </div>
    </>
    
  )
}

export default Home