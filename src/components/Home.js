import React, { useEffect } from 'react'
import {useState} from 'react'
import "./HomeStyles.css"
import Navbar from './Navbar'
import BlogCard from './BlogCard';
import SeeMore from './SeeMore';
// import FilterBlogs from './FilterBlogs';



const Home = () => {

  const initialBlogs=[
    {
      id:1,
      category:"Technology",
      title:"React Js an amazing library",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat debitis vel cumque sunt nesciunt, quidem eveniet quasi, amet beatae animi ea officia reiciendis libero fugit facere nostrum ullam doloribus Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat debitis vel cumque sunt nesciunt, quidem eveniet quasi, amet beatae animi ea officia reiciendis libero fugit facere nostrum ullam doloribus Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat debitis vel cumque sunt nesciunt, quidem eveniet quasi, amet beatae animi ea officia reiciendis libero fugit facere nostrum ullam doloribus Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat debitis vel cumque sunt nesciunt, quidem eveniet quasi, amet beatae animi ea officia reiciendis libero fugit facere nostrum ullam doloribus!",
      date:"12/6/2021",
    },
    {
      id:2,
      category:"Fashion",
      title:"Must have fashion accessories in 2023",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat debitis vel cumque sunt nesciunt, quidem eveniet quasi, amet beatae animi ea officia reiciendis libero fugit facere nostrum ullam doloribus!",
      date:"25/5/2023"
    },
    { 
      id:3,
      category:"Travel",
      title:"Must visit places in India",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat debitis vel cumque sunt nesciunt, quidem eveniet quasi, amet beatae animi ea officia reiciendis libero fugit facere nostrum ullam doloribus!",
      date:"1/10/2021"
    },
    {
      id:4,
      category:"Food",
      title:"Best food in the world",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat debitis vel cumque sunt nesciunt, quidem eveniet quasi, amet beatae animi ea officia reiciendis libero fugit facere nostrum ullam doloribus!",
      date:"5/3/2022"
    },
    {
      id:5,
      category:"Fashion",
      title:"Fashion trends in 2023",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat debitis vel cumque sunt nesciunt, quidem eveniet quasi, amet beatae animi ea officia reiciendis libero fugit facere nostrum ullam doloribus!",
      date:"2/5/2023"
    },
   

  ]

  const[blogs,setBlogs]=useState([...initialBlogs
  //   {
  //   id:1,
  //   catagory:"Technology",
  //   title:"React Js an amazing library",
  //   content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat debitis vel cumque sunt nesciunt, quidem eveniet quasi, amet beatae animi ea officia reiciendis libero fugit facere nostrum ullam doloribus Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat debitis vel cumque sunt nesciunt, quidem eveniet quasi, amet beatae animi ea officia reiciendis libero fugit facere nostrum ullam doloribus Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat debitis vel cumque sunt nesciunt, quidem eveniet quasi, amet beatae animi ea officia reiciendis libero fugit facere nostrum ullam doloribus Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat debitis vel cumque sunt nesciunt, quidem eveniet quasi, amet beatae animi ea officia reiciendis libero fugit facere nostrum ullam doloribus!",
  //   date:"12/6/2021",
  // },
  // {
  //   id:2,
  //   catagory:"Fashion",
  //   title:"Must have fashion accessories in 2023",
  //   content:<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat debitis vel cumque sunt nesciunt, quidem eveniet quasi, amet beatae animi ea officia reiciendis libero fugit facere nostrum ullam doloribus!</p>,
  //   date:"25/5/2023"
  // },
  // { 
  //   id:3,
  //   catagory:"Travel",
  //   title:"Must visit places in India",
  //   content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat debitis vel cumque sunt nesciunt, quidem eveniet quasi, amet beatae animi ea officia reiciendis libero fugit facere nostrum ullam doloribus!",
  //   date:"1/10/2021"
  // },
  // {
  //   id:4,
  //   catagory:"Food",
  //   title:"Best food in the world",
  //   content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat debitis vel cumque sunt nesciunt, quidem eveniet quasi, amet beatae animi ea officia reiciendis libero fugit facere nostrum ullam doloribus!",
  //   date:"5/3/2022"
  // },
  // {
  //   id:5,
  //   catagory:"Fashion",
  //   title:"Fashion trends in 2023",
  //   content:<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat debitis vel cumque sunt nesciunt, quidem eveniet quasi, amet beatae animi ea officia reiciendis libero fugit facere nostrum ullam doloribus!</p>,
  //   date:"2/5/2023"
  // },
 
]);


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



const [selectedCategory,setSelectedCategory]=useState("All");
const [filteredBlogs,setFilteredBlogs]=useState([]);

useEffect(()=>{
  const storedBlogs=JSON.parse(localStorage.getItem("blogs"));
  setBlogs(storedBlogs);
},[])
useEffect(()=>{
  localStorage.setItem("blogs",JSON.stringify(blogs));
  // filtering based on selected catagory
  const filtered= selectedCategory==="All" ? blogs : blogs.filter((blog)=>blog.category===selectedCategory);
  setFilteredBlogs(filtered);
},[blogs,selectedCategory]);

const handleCategoryChange=(e)=>{
  setSelectedCategory(e.target.value);
};

  return (
    <>
    <Navbar/>
    <div className='blog-posts'>
      <div className='search-box'>
      <input type="text" placeholder='Search Blogs'className='search-input' name='search'></input>
      </div>

      
     
       <div className='filter-box'>
        <label htmlFor='categories'>Filter by Category</label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="All">All</option>
            <option value="Technology">Technology</option>
            <option value="Fashion">Fashion</option>
            <option value="Travel">Travel</option>
            <option value="Food">Food</option>
       </select>
    </div>

      {filteredBlogs.map((blog)=>(
        <BlogCard
        key={blog.id}
        id={blog.id}
        catagory={blog.catagory}
        title={blog.title}
        // content={blog.content}
        date={blog.date}
        // blog={blog}
        />

         
      ))}
    
      
    </div>
    </>
    
  )
}

export default Home