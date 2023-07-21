import React from 'react'
import {useState} from 'react'

const BlogCard = ({

    catagory,
    title,
    content,
    date    
}) => {
    const[likes,setLikes]=useState(5);
    const[isLiked,setIsLiked]=useState(false);


    const handleLike=()=>{
        if(!isLiked){
            setLikes(likes+1);
            setIsLiked(true);
        }
        else{
        setLikes(likes-1);
        setIsLiked(false);
        }
    }

    const[comments,setComments]=useState([]);

    const handlecomment=()=>{
        const comment=prompt("Enter your comment");
        setComments([...comments,comment]);
    }

  return (
    <div className='blogCard'>
        <h1>{catagory}</h1>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>{date}</p>
        <p>{likes}</p>
        <button onClick={handleLike}>{isLiked ? 'Unlike' : 'Like'}</button>
        <button onClick={handlecomment}>comment</button>
        <button className='fullblog'>See More</button>
        
    </div>
  )
}

export default BlogCard