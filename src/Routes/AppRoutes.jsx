import { Route, Routes } from "react-router-dom";
import Landing from "../Pages/Landing";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import RegisterEmployee from "../Pages/RegisterEmployee";
import ProtectedRoute from "./ProtectedRoute";
import AddDeleteProducts from "../Pages/AddDeleteProducts";
import ProductPage from "../Pages/ProductPage";
import Razorpay from "../Pages/RazorPay";
import Profile from "../Pages/Profile";
import ShopDetails from "../Pages/ShopDetails";
import UpdateProducts from "../Pages/UpdateProducts";
import GenerateBill from "../Pages/GenerateBill";
import Sales from "../Pages/Sales";
import Policy from "../Pages/Policy";

const AppRoutes = () => {
    return (
        <Routes>
      <Route path="/Register" element={<Register />} />
      <Route path="/" element={<Landing/>} />
      <Route path="/Dashboard" element={<Dashboard />} >
      <Route index element={<ProductPage/>} />
      <Route path="add-delete-products" element={
        <ProtectedRoute allowedRoles={["ShopOwner"]}>
          <AddDeleteProducts />
        </ProtectedRoute>
      } />
        <Route path="register-employee" element={
          <ProtectedRoute allowedRoles={["ShopOwner"]}>
             <RegisterEmployee />
          </ProtectedRoute>
          } /> 
          <Route path="updateProducts" element={
          <ProtectedRoute allowedRoles={["ShopOwner"]}>
            <UpdateProducts />
          </ProtectedRoute>
          } />

         <Route path="sales" element={
          <ProtectedRoute allowedRoles={["ShopOwner"]}>
           <Sales />
          </ProtectedRoute>
         } />

          <Route path="generateBill" element={<GenerateBill/>} />

         <Route path="profile" element={<Profile />} />
         <Route path="shopDetails" element={<ShopDetails/>} />
         <Route path="policy" element={<Policy/>} />
      {/*  <Route index element={<Home />} />
        <Route path="/generate-bill" element={<GenerateBill />} />*/}
          <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
      {/* <Route path="/razorpay" element={<Razorpay />} /> */}
      {/* <Route path="/ProductPage" element={<ProductPage />} /> */}
    </Routes>
    );
}

export default AppRoutes;