import React from 'react'
import './FilterBlogs.css'

const FilterBlogs = (props) => {
    // const onFilterChange=(e)=>{
    //     // console.log(e.target.value);
    //     props.filterValueSelected(e.target.value)
    // }
  return (
    <div className='filter-box'>
        <select name="categories" >
            <option value="All">All</option>
            <option value="Technology">Technology</option>
            <option value="Fashion">Fashion</option>
            <option value="Travel">Travel</option>
            <option value="Food">Food</option>
       </select>
    </div>
  )
}

export default FilterBlogs