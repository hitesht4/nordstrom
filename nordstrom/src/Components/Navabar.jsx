import React from 'react';
import { useContext } from 'react';
import {AuthContext} from '../Context/AuthContext';
import {Container,Nav,Navbar,Form} from 'react-bootstrap';
import {BsBagCheck} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import {AiOutlinePoweroff} from 'react-icons/ai';

const Navabar = () => {
     const Navigate=useNavigate();
     const {auth,logout}=useContext(AuthContext);
     const handleLogout=()=>{
      logout();
      Navigate("/login");
     }
  return (
    <>
     <div className="Offer">
    <div></div>
    <p> Shipping outside of the U.S. or Canada? <span className="span">  Learn About International Shipping</span></p>
   
    <div>
        <img style={{width:"14px"}} src="https://n.nordstrommedia.com/alias/IN.gif" alt=""/>
        India</div>
      </div>

       <Navbar  expand="lg" className="py-3  border">
      <Container fluid className='py-1 '>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          
        <div className="w-25 hite">
             <img className="Navbar_logo w-75 loogo"
        src="https://n.nordstrommedia.com/alias/nordstrom-logo.svg" alt="" onClick={()=>Navigate("/")}/>
          </div>


          <div className="w-50 px-2 hite">
             <Form>
            <Form.Control
              type="search"
              placeholder="Search For Products Or Brands"
              className="py-2 border"
              aria-label=""
            />
          </Form>
          </div>
          <div className="w-25 px-5 d-flex">
             <div className="Empty"></div>
            <Nav className="w-50 fonts">
              <Nav.Link onClick={()=>Navigate("/")} className="home">Home</Nav.Link>
              {auth ? <Nav.Link onClick={()=>Navigate("/login")}>
                <AiOutlinePoweroff style={{color:"red"}} onClick={handleLogout}/>
              </Nav.Link> :<Nav.Link onClick={()=>Navigate("/login")}>SignIn</Nav.Link>}   
          <Nav.Link onClick={()=>Navigate("/cart")}><BsBagCheck style={{fontSize:"25px"}}/></Nav.Link>
            </Nav>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
     <div className="ash">
         <li className="li" onClick={()=>Navigate("/")} style={{color:"#dd484f"}}>Sale</li>
         <li className="li" onClick={()=>Navigate("/women")} >Women</li>
         <li className="li" onClick={()=>Navigate("/men")} >Men</li>
         <li className="li" onClick={()=>Navigate("/")} >Kids</li>
         <li className="li" onClick={()=>Navigate("/")}>Young Adult</li>
         <li className="li" onClick={()=>Navigate("/")}>Activewear</li>
         <li className="li" onClick={()=>Navigate("/")}>Home</li>
         <li className="li" onClick={()=>Navigate("/")}>Beauty</li>
         <li className="li" onClick={()=>Navigate("/")}>Designer</li>
         <li className="li" onClick={()=>Navigate("/")}>Gifts</li>
         <li className="li" onClick={()=>Navigate("/")}>Brands</li>
    </div>
    </>
  )
}

export default Navabar;


