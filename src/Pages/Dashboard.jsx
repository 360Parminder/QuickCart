import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Auth } from '../Context/UserAuth';

const Dashboard = () => {
    const {logout} = useContext(Auth);
  return (
    <div className="flex w-full h-full">
      {/* Navigation Section */}
      <nav className="w-1/4 bg-gray-800 text-white p-4 h-screen">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <ul className="space-y-4">
          <li>
            <Link to="Home" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="profile" className="hover:text-gray-300">Profile</Link>
          </li>
          <li>
            <Link to="add-delete-products" className="hover:text-gray-300">Add/Delete Products</Link>
          </li>
          <li>
            <Link to="sales" className="hover:text-gray-300">Sales</Link>
          </li>
          <li>
            <Link to="update" className="hover:text-gray-300">Update</Link>
          </li>
          <li>
            <Link to="Products" className="hover:text-gray-300">Generate Bill</Link>
          </li>
          <li>
            <Link to="register-employee" className="hover:text-gray-300">Register Employee</Link>
          </li>
          <li>
            <button className=' bg-red-600 rounded-md p-1 ' onClick={()=>logout()}>Log out</button>
          </li>
        </ul>
      </nav>

      {/* Content Section */}
      <div className="w-3/4 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
