import React from 'react'
import { useState, useEffect } from 'react'
import "./CarouselStyles.css"
import cooking from '../assets/cooking.jpg';
import tech from '../assets/tech.jpg';
import travel from '../assets/travel.jpg';
import fashion from '../assets/fashion.jpg';
import fiction from '../assets/fiction.jpg';

const Carousel = () => {
    const data=[
        {
            imageSrc: cooking,
            text:"mycooking blog",
        },
        {
            imageSrc: travel,
            text:"Travel blog",
        },
        {
            imageSrc: tech,
            text:"Technology News",
        },
        {
            imageSrc: fashion,
            text:"Fashion trends",
        },
        {
            imageSrc: fiction,
            text:"Fiction blogs",
        },

]
    const[currentIndex,setCurrentIndex]=useState(0)
    const carouselInfiniteScroll=()=>{
        if(currentIndex===data.length-1){
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex+1)
    }

    useEffect(()=>{
        const interval= setInterval(() => {
            carouselInfiniteScroll()
        }, 3000);
        //cleaning up function
        return() => clearInterval(interval)
    })
  return (
    <div className='carousel-container'>
        <div className='carousel-wrapper'
        style= {{transform:`translateX(-${currentIndex*100}%)`,
    transition: 'transform 1s ease-in-out',
    }}
        >
        {data.map((item,index) => {
             <div className='carouselItem'
                 key={index}>
                    <p>{item.text}</p>
                    <img src={item.imageSrc} alt ={`Carousel Item ${index}`}/>

            </div>
        })}
        </div>
    </div>
  );
};

export default Carousel;