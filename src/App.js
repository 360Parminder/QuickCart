import Register from "./Pages/Register";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Razorpay from "./Pages/RazorPay";

import ProductPage from "./Pages/ProductPage";
import Landing from "./Pages/Landing";

const App = () => {
  return (
   
 <Routes>
      <Route path="/Register" element={<Register />} />
      <Route path="/" element={<Landing/>} />
      <Route path="/razorpay" element={<Razorpay />} />
      <Route path="/ProductPage" element={<ProductPage />} />
    </Routes>
    
  
  );
  
}

export default App;