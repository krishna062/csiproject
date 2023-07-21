import React from 'react'
import {useState} from 'react'
// import{useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'

const BlogCard = ({
    // blog

    id,
    category,
    title,
    content,
    date    
}) => {
    // const {category,title,content,date}=blog;
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
        <p>{date}</p>
        <p>{likes}</p>
        <button onClick={handleLike}>{isLiked ? 'Unlike' : 'Like'}</button>
        <button onClick={handlecomment}>comment</button>
        {/* <button className='fullblog' onClick={handleSeeMore}>See More</button> */}
        <button><Link to={`/blog/${id}`}>See More</Link></button>
    </div>
  )
}

export default BlogCard