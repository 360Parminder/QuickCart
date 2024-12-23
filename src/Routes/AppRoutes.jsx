import { Route, Routes } from "react-router-dom";
import Landing from "../Pages/Landing";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import RegisterEmployee from "../Pages/RegisterEmployee";
import ProtectedRoute from "./ProtectedRoute";
import AddDeleteProducts from "../Pages/AddDeleteProducts";
import ProductPage from "../Pages/ProductPage";

const AppRoutes = () => {
    return (
        <Routes>
      <Route path="/Register" element={<Register />} />
      <Route path="/" element={<Landing/>} />
      <Route path="/Dashboard" element={<Dashboard />} >
        <Route index element={<Home />} />
        {/* <Route path="/profile" element={<Profile />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/update" element={<Update />} />
        <Route path="/generate-bill" element={<GenerateBill />} />*/}
        <Route path="add-delete-products" element={
          <ProtectedRoute allowedRoles={["Owner"]}>
            <AddDeleteProducts />
          </ProtectedRoute>
        } />
        <Route path="register-employee" element={
          <ProtectedRoute allowedRoles={["Owner"]}>
             <RegisterEmployee />
          </ProtectedRoute>
          } /> 
          <Route path="Products" element={<ProductPage/>} />
          <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
      {/* <Route path="/razorpay" element={<Razorpay />} /> */}
      {/* <Route path="/ProductPage" element={<ProductPage />} /> */}
    </Routes>
    );
}

export default AppRoutes;