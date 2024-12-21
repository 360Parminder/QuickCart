import { Route, Routes } from "react-router-dom";
import Landing from "../Pages/Landing";
import Register from "../Pages/Register";

const AppRoutes = () => {
    return (
        <Routes>
      <Route path="/Register" element={<Register />} />
      <Route path="/" element={<Landing/>} />
        
      {/* <Route path="/razorpay" element={<Razorpay />} /> */}
      {/* <Route path="/ProductPage" element={<ProductPage />} /> */}
    </Routes>
    );
}

export default AppRoutes;