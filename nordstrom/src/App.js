import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Mens from './Pages/Mens';
import Womens from './Pages/Womens';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import SingleProduct from './Pages/SingleProduct';
import Payment from './Pages/Payment';
import Footer from './Components/Home/Footer';
import RequiredAuth from './Pages/Hoc/RequiredAuth';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/men" element={<Mens/>}/>
        <Route path="/women" element={<Womens/>}/>
        <Route path="singleProduct/:id" element={<SingleProduct/>}/>
        <Route path="/*" element={<NotFound/>}/>
        <Route path="/cart"
        element={<RequiredAuth>
                  <Cart/>
                 </RequiredAuth>
                }/>
        <Route path="/payment" 
        element={<RequiredAuth>
                  <Payment/>
                </RequiredAuth>}/>
      </Routes>
    <Footer/> 


     
    </>
  );
}

export default App;
