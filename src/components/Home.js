import React, { useEffect } from 'react'
import {useState} from 'react'
import "./HomeStyles.css"
import Navbar from './Navbar'
import BlogCard from './BlogCard';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Home = () => {

  const initialBlogs=[
    {
      id:1,
      category:"Technology",
      title:"React Js an amazing library",
      content:"React is a front-end JavaScript library used for building user interfaces specifically for single-page applications. It’s used for handling view layers, hence, making the rendering of HTML a better user experience. It is an open-source library that was first introduced in March 2013 and is developed and maintained by developers from Facebook and other members of the open-source software community. React.js provides an efficient, declarative, and flexible way to build complex user interfaces. It works with a “Virtual DOM” which makes it highly reactive. There is no gainsaying react.JS is a powerful and popular JavaScript library used for building user interfaces. Since its release, it has gained immense popularity and has become the de-facto standard for building modern web applications. Single-page applications (SPAs) have become increasingly popular over the years as they provide a seamless user experience by eliminating page reloads. React.JS is a perfect fit for building SPAs as it allows developers to create reusable UI components that can be used across different pages of an application. With React, developers can easily manage the state of their applications, making it easier to build complex and dynamic interfaces. Progressive Web Apps (PWAs) are web applications that can work offline and provide a native-like experience to users. React.JS is a perfect fit for building such apps as it allows developers to create responsive and fast-loading interfaces that can work on any device. With the help of service workers, developers can cache important assets and data, making PWAs work offline seamlessly.E-commerce applications require a lot of dynamic and interactive user interfaces. React.JS is a perfect fit for building applications like this as it provides a robust set of tools for creating dynamic UIs. With React, developers can easily manage the state of an application, making it easier to build complex interfaces that respond to user input in real time.",
      date:"12/6/2021",
    },
    {
      id:2,
      category:"Fashion",
      title:"Must have fashion accessories in 2023",
      content:"For Spring/Summer 2023, weaving comes alive with artisanal crafting and sustainability through longevity, quality and upcycling practices, while seasonal designs reflect the values and messages key to new consumer mindsetsFor Spring/Summer 2023, bags focus on consumers’ demand for comfort with easy- to-carry styles that hug the body and bring softness via soft, plush textures.Weaving comes alive with artisanal crafting and sustainability through longevity, quality and upcycling practices, while seasonal designs reflect the values and messages key to new consumer mindsets.This season, Fendi chose to celebrate the 25th anniversary of its iconic ‘baguette’ bag during NYFW. Designer Kim Jones explained that as the bag was an integral part of the original series of Sex and the City, it seemed appropriate to show the collection in New York.Designers and brands are going all out and experimenting with playful styles that feature exaggerated, pumped-up proportions that are ultra-creative and underline unexpected elements in their rendering.Moulded-look constructions and bulbous, rounded sole units inspired by the metaverse appear as though they are ready to be worn by an avatar. Soft gathered sock effect booties and glittering crystal studs add to the other-worldly feel to make these pieces further compliment the trend that is sure to be a sell-out among the Gen Z and Gen Alpha crowd.",
      date:"25/5/2023"
    },
    { 
      id:3,
      category:"Travel",
      title:"Must visit places in India",
      content:"Travel while you’re still young. Lose yourself to find your own self. Live like there’s no tomorrow. And whatever you’ll explore today will last a lifetime with you. So, here’s a list of  amazing places to visit in India you must visit before you turn 30. These are not just destinations but fun places that will offer you some crazy experiences of a lifetime. What are you waiting for? It’s time to pack your bags and set on a journey to scratch off a few destinations from your bucket list. It’s time to visit these best tourist places in India to explore yourself on a journey.Here is a list of the 101 most beautiful places in India before you turn 30. These places in India are known for their magnificence and overall beauty. They are also considered havens for solo travellers.Unarguably, Goa has to be amongst the first few famous places in India in your twenties. Young and energetic!The majestic mountains can call tourists to experience the best of what nature has to offer at Mcleodganj – one of the most beautiful places to visit in India.If you’re in your twenties, it’s time to add Kashmir to your list of beautiful places in India to visit. If there is heaven on earth, this it is! Scared of water? Never swam? Maybe it’s time to beat the fear out of you and dive into the deep sea and overcome the fear of water and depths, ZNMD Style. Trust us, you’d be delighted at the sites underwater and it will keep you coming back for more. For aqua lovers, these best tourist places in India which feel no less than a paradise! Undoubtedly, Leh – Ladakh is on every travel enthusiast’s list of famous tourist places to visit in India before they turn 30. Ride on the crazy winding roads, get stuck in the middle of nowhere, sleep with the locals, go trekking in Ladakh, and learn to be independent in the desert mountains as you undertake this adventurous journey in one of the best places in India.",
      date:"1/10/2021"
    },
    {
      id:4,
      category:"Food",
      title:"Best Food Recipes",
      content:"A food blog that makes cooking fun and simple - a perfect dish every time! Our easy and fail-proof recipes deliver authentic flavors using modern and innovative techniques.Basic recipes that we all need to master! Detailed recipes for Essential Indian Pantry items such as Homemade Ghee, EASY 5-ingredient Garam Masala and Spicy Chutneys. Learn how to make the perfect Instant Pot Quinoa , Brown Rice and check out the useful and handy guide to  Indian Pulses.Use your Instant Pot Pressure Cooker to make quick, easy, and hands-free recipes that will have even your harshest critics coming back for seconds My kitchen is always stocked with lentils and beans. These pantry basics have a long shelf life and are perfect for creating a quick and wholesome last-minute meal. Legumes are nutrient-rich and the main source of protein and fiber for many of my Indian dishes. They are also great in chilis and soups. Here are my low-carb recipes that include one-pot meals, soups, and curries that are high in healthy fats, and packed with protein. This collection also includes my favorite sides and salads to make a hearty meal.Breakfast is the most important meal of the day. You want to make sure your morning starts off right with a nutritious meal. Fuel your body with these healthy recipes proven and tested in my kitchen by the harshest of critics.. my boys.I personally enjoy vegetarian meals as they are faster to cook and I love adding colorful seasonal produce to my family meals. My children love these delicious vegetarian recipes that are perfectly spiced and simply delicious. One of our family favorites for busy weeknights and for entertaining is the Instant Pot Vegetable & Paneer Biryani.Select from my collection of Indian desserts like my mom’s melt-in-your-mouth Besan Ladoo and the popular Indian dessert Carrot Halwa made so easily in the Instant Pot. Or try some of my favorites such as sweet lentil flatbreads called Puran Poli and heavenly Ukadiche Modak.",
      date:"5/3/2022"
    },
    {
      id:5,
      category:"Fashion",
      title:"Fashion trends in 2023",
      content:"India is the land of diverse traditions and rich cultural heritage and is home to different types of sarees. Every Type of Saree in India represents a different region and unique culture. There is a unique story behind each timeless Indian saree’s creation. From rich Banarasi Saree to Vibrant Bandhani Saree to Intricate Kanjeevaram Saree, […] Back Hand Mehndi Designs are integral for special occasions like weddings, traditional celebrations, religious festivals and events. Stylish Back Mehndi Designs add elegance and beauty to the hands. It enhances the appearance of the bride and bridesmaids at wedding functions. On a memorable day of the wedding, brides can try these latest Back Hand Mehndi […]  In today’s digital era, Smartwatch Brands change the way to track our fitness and manage our lives. Smartwatches are digital wristbands that integrate technology with elegance. Top smartwatch brands in India make high-technology watches with advanced-level features. The smartwatches are the perfect blend of functionality, fashion, and futuristic capabilities. Whether you’re a tech enthusiast, fitness […] From trendy to classic designs, these Top Watch Brands are sure to keep you on-trend and on time. So without any further confusion, get ready to discover the Best Watch Brands in India that will take your fashion game to the next level. Time is the most precious thing in our life that we can […] Want to look chic and sleek with Kurti? Look no further, you should try some Stylish Kurti Sleeves Designs listed below. Whether you prefer a classic or modern look, there is a sleeve design for everyone. Make your kurti outfit an attention-grabbing piece with the latest Kurti Sleeves Design. These trendy kurti sleeves bring the […] There is no other piece of clothing in your wardrobe that can beat the versatility of blue jeans. Regardless of season or occasion, you can dress up in Blue Jeans Matching Shirt, t-shirts, jackets, blazers, polo tees, or denim shirts effortlessly. Here, we discuss ‘what to wear with blue jeans’ according to the occasion and […]",
      date:"2/5/2023"
    },
   

  ]

  const[blogs,setBlogs]=useState([...initialBlogs ]);

const [selectedCategory,setSelectedCategory]=useState("All");
// const [filteredBlogs,setFilteredBlogs]=useState([]);
const [searchValue,setSearchValue]=useState("");

useEffect(()=>{
  const storedBlogs=JSON.parse(localStorage.getItem("blogs"));
  setBlogs(storedBlogs);
},[]);
useEffect(()=>{
  localStorage.setItem("blogs",JSON.stringify(blogs));
},[blogs]);



const handleSearchChange=(e)=>{
  setSearchValue(e.target.value);
};

// 

const handleCategoryChange=(e)=>{
  setSelectedCategory(e.target.value);
};

const filteredBlogs=blogs.filter((blog)=>{
  const categoryMatch= selectedCategory==="All" || blog.category===selectedCategory;
  const titleMatch= searchValue=== "" || blog.title.toLowerCase().includes(searchValue.toLowerCase());
  return categoryMatch && titleMatch;
})

  return (
    <>
    <Navbar/>
    
      <div className='search-box'>
      <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
      <input type="text" placeholder='Search Blogs'className='search-input' name='search' 
      value={searchValue}
      onChange={handleSearchChange}
      
      />
     
      </div>

      <div className='blog-posts'>
     
       <div className='filter-box'>
        <label htmlFor='categories'>Filter by Category </label>
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
        content={blog.content}
        date={blog.date}
        
        />

         
      ))}
    
      
    </div>
    <div className='footer'>
      <h1>BLOGGERS</h1>
      <p> COPYRIGHT © </p>
      <p>CONTACT US</p>
    </div>
    </>
    
  )
}

export default Home