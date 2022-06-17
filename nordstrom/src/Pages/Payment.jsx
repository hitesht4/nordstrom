import './Payment.css';
import React,{useState} from 'react';
import Details from '../Components/Payment/Details';
import Address from '../Components/Payment/Address';
import Card from '../Components/Payment/Card';
import CartHeading from '../Components/Payment/CartHeading';
import SuccessModal from '../Components/Payment/SuccessModal';
import PayNavbar from '../Components/Payment/PayNavbar';


const Payement = () => {
 const [pay,setPay]=useState(false);

  return (
  <div>
    <PayNavbar/>
  <div className="MainGrids">
 <div>
   {pay ? 
   <Card/> 
   :
   <Address setPay={setPay}/>}
 </div>

  <div className='Final'>
  <CartHeading/>
  </div>
  
  </div>
  </div>

  )
}

export default Payement;

