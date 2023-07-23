import React from 'react'
import {useState} from 'react'
// import{useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
import './BlogCard.css'


const BlogCard = ({
    // blog

    id,
    category,
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

    // const history=useHistory();

    // const handleSeeMore=()=>{
    //     history.push(`/blog/${id}`);
    // };

  return (
    <div className='blogCard'>
        <h1>{category}</h1>
        <h2>{title}</h2>
        <p>{content}</p>
        <p className='date'>{date}</p>
        <div className='options'>
            <p>❤ {likes}</p>
        <button onClick={handleLike} className='likebtn'>{isLiked ? 'Unlike 👎' : ' Like 👍 '} </button>
        <button onClick={handlecomment}>Comment</button>
        {/* <button className='fullblog' onClick={handleSeeMore}>See More</button> */}
        <button><Link to={`/blog/${id}`}>See More</Link></button>
        </div>
    </div>
  )
}

export default BlogCard