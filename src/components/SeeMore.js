import React from 'react'
import{useParams} from 'react-router-dom'

const SeeMore = () => {
    const {id}=useParams();


  return (
    <div>
        <p>{id}</p>
        
    </div>
  )
}

export default SeeMore