import React from 'react';
import '../App.css';
import Vedio from '../Components/Home/Vedio';
import Slide1 from '../Components/Home/Slide1';
import Slide2 from '../Components/Home/Slide2';
import Slide3 from '../Components/Home/Slide3';
import Main from '../Components/Home/Main';
import NewNoteworthy from '../Components/Home/NewNoteworthy';
import Divided from '../Components/Home/Divided';
import Thread from '../Components/Home/Thread';
import Pickup from '../Components/Home/Pickup';
import Category from '../Components/Home/Category';
import Overlay from '../Components/Home/Overlay';
import Product1 from '../Components/Home/Product1';
import Products2 from '../Components/Home/Products2';
import Products3 from '../Components/Home/Products3';
import SignSection from '../Components/Home/SignSection';
import Navabar from '../Components/Navabar';


const Home = () => {
  return (
    <div>
      <div>
         <Navabar/>
      </div>
    <div className="Container_div">
    <SignSection/>
    <Slide1/>
       <Slide2/>
       <Products2 heading={'Great deals on what you love'} text={"Items similar to what you've browsed are on sale"}/>
       <Main/>
       <Product1 heading={"Here's what caught your eye"} text={"Recently viewed"}/>
       <NewNoteworthy/> 
       <Divided/>
       <Products2 heading={"We think you’ll love these"}  text={"Based on items you've shopped"}/>  
        <Thread/>
        <Vedio/>
       <Products3 heading={"New arrivals from brands you might like"}/>
        <Slide3/> 
        <Pickup/>
       <Category/>
      <Overlay/> 
       <Product1 heading={"Here's what caught your eye"} text={"Recently viewed"}/>
    </div>
    </div>
  )
}

export default Home;