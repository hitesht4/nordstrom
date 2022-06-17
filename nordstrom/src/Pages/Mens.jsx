import React,{useState} from 'react'
import AllCards from '../Components/Products/AllCards';
import Dropdown from '../Components/Products/Dropdownmen';
import styles from './Product.module.css';
import { useEffect } from 'react';
import { useContext } from 'react';
import { DataContext } from '../Context/DataProvider';
import Navabar from '../Components/Navabar';

const Mens = () => {
  const {prod,val,setProd,handleData}=useContext(DataContext);

  const Sort=(value,type)=>{

  if(type==="P"){
    if(value==="Low"){
      prod.sort(function(a,b){
        return a.price-b.price;
      })
    }
    else{
      prod.sort(function(a,b){
        return b.price-a.price;
      }) 
    }
    setProd([...prod]);
  }
  else{
      if(value==="Low"){
      prod.sort(function(a,b){
        return a.ratings-b.ratings;
      })
      }
      else{
      prod.sort(function(a,b){
        return b.ratings-a.ratings;
      }) 
    }
    setProd([...prod]);
  }

      
      
  }
  const filterBtn=(col)=>{
    const F=val.filter(item=>
        item.color===col
    )
    setProd([...F]);
    console.log(F);
  }
  const filterBrand=(value)=>{
    const F=val.filter(item=>
          item.brand===value
    )
        setProd([...F]);
        
  }
  const filterCat=(value)=>{
    const F=val.filter(item=>
      item.category===value
    )
      setProd([...F]);
  }

  useEffect(()=>{
     handleData("m")
  },[])



  return (
    <div>
    <div>
      <Navabar/>
    </div>
    <div className={styles.Maindiv}>
    <div className={styles.Div1}>
      <div className={styles.Drawer}>
           <Dropdown 
           Sort={Sort}
           filterBrand={filterBrand}
           filterCat={filterCat}
           filterBtn={filterBtn}/>
      </div>
    </div>


    <div>
    <AllCards data={prod}/> 
    </div>
    </div>
    </div>
  )
}

export default Mens;