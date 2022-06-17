import React from 'react'
import SingleItem from '../Components/Single/SingleItem';
import { useParams } from 'react-router-dom';
import { useEffect,useContext } from 'react';
import { DataContext } from '../Context/DataProvider';
import Navabar from '../Components/Navabar';

const SingleProduct = () => {
  const params=useParams();
  const {id}=params;
  const {prod,handleData}=useContext(DataContext);

     useEffect(()=>{
       handleData(undefined,id);
    },[]);

  return (
    <div>
     <div>
      <Navabar/>
     </div>
    <div>
    {prod.map(item=>
      <SingleItem {...item} key={item.id}/>
    )} 
    </div>

    </div>
  )
}

export default SingleProduct