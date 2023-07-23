import React, { useState ,useEffect} from 'react'
import{useParams} from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar';


const SeeMore = () => {
    const {id}=useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get('/api/blogs/${id}').then(response=>{
      setBlog(response.data);
    })
    .catch(error =>{
      console.error('Error fetching data: ', error);
    });
  }, [id]);

  if(!blog){
    return(
      <div>
        Loading...
      </div>
    )
  }
  return (
    <>
    <Navbar/>
    <div>
        {/* <p>{id}</p> */}
        <h1>{blog.title}</h1>
        <p>{blog.content}</p>
        <p>Date:{blog.date}</p>
        
    </div>
    </>
  )
}

export default SeeMore