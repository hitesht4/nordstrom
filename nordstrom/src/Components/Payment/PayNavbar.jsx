import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../Home/assets/NavLogo.png';
import {BsBagFill} from 'react-icons/bs';

const PayNavbar = () => {
    const navigate=useNavigate();
    const Move=(route)=>{
        navigate(route)
    }
  return (
    <div className="d-flex justify-content-between border py-4 px-5">
     <div>
        <img src={Image} alt="" onClick={()=>{Move('/')}}/>
     </div>
     <div>
        <h3 onClick={()=>{Move('/cart')}}><BsBagFill/></h3>
     </div>
    </div>
  )
}

export default PayNavbar