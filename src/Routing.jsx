import React from 'react'

import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Auth";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import LayOut from './Components/Layout/Layout';
import ProductDetail from './Pages/ProductDetail/ProductDetail';

function Routing() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LayOut />} >
            <Route path="/" element={<Landing />} />
            <Route path="/auth" element={<Auth />} />
            <Route  path="/payments" element={ <Payment />} />
            <Route  path="/orders" element={<Orders />} />
            <Route  path="/cart" element={<Cart />} />
            <Route path="/category/:categoryName" element={<Results />} />
            <Route path="/products/:productId" element={<ProductDetail/>} />
     
      
      </Route>
     
    </Routes>
  </Router>
  )
}

export default Routing