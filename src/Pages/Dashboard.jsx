import React, { useState, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Auth } from '../Context/UserAuth';
import { IoPersonOutline, IoCartOutline, IoStatsChartOutline, IoConstructOutline, IoPeopleOutline, IoLogOutOutline,IoStorefrontOutline, IoCardOutline, } from 'react-icons/io5';
import logo from '../Assets/Images/logo.png';
import icon from '../Assets/Images/logoicon.png';
import { UserData } from '../Context/UserData';

const Dashboard = () => {
    const { logout } = useContext(Auth);
    const { userdata } = useContext(UserData);
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    return (
        <div className="flex w-full h-screen py-2">
            {/* Navigation Section */}
            <nav
                onMouseEnter={() => setIsNavCollapsed(false)}
                onMouseLeave={() => setIsNavCollapsed(true)}
                className={`${isNavCollapsed ? 'w-16' : 'w-64'} transition-all duration-300 bg-[#2c076e] border border-[#5a12c5] text-white h-full overflow-hidden mx-3 py-2 rounded-lg shadow-lg flex flex-col`}
            >
                <h1 className="text-2xl font-bold mb-6 transition-opacity duration-300 p-4">
                    {isNavCollapsed ? <img src={icon} alt="" /> : <img src={logo} alt="Product logo" />}
                </h1>
                <ul className="space-y-4 flex-grow flex flex-col items-start whitespace-nowrap">
                    <li>
                        <Link to="/Dashboard" className="flex items-center space-x-4 hover:text-gray-300 px-4">
                            <IoCardOutline size={24} />
                            {!isNavCollapsed && <span>Generate Bill</span>}
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="Home" className="flex items-center space-x-4 hover:text-gray-300 px-4">
                            <IoHomeOutline size={24} />
                            {!isNavCollapsed && <span>Home</span>}
                        </Link>
                    </li> */}
                   
                    <li>
                        <Link to="add-delete-products" className="flex items-center space-x-4 hover:text-gray-300 px-4">
                            <IoCartOutline size={24} />
                            {!isNavCollapsed && <span className="whitespace-nowrap">Add Products</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="sales" className="flex items-center space-x-4 hover:text-gray-300 px-4">
                            <IoStatsChartOutline size={24} />
                            {!isNavCollapsed && <span>Sales</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="update" className="flex items-center space-x-4 hover:text-gray-300 px-4">
                            <IoConstructOutline size={24} />
                            {!isNavCollapsed && <span>Update</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="register-employee" className="flex items-center space-x-4 hover:text-gray-300 px-4">
                            <IoPeopleOutline size={24} />
                            {!isNavCollapsed && <span>Register Employee</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="shopDetails" className="flex items-center space-x-4 hover:text-gray-300 px-4">
                            <IoStorefrontOutline size={24} />
                            {!isNavCollapsed && <span>Shop Details</span>}
                        </Link>
                    </li>
                </ul>
                {/* Logout Button */}
                <div className="flex flex-col items-center mt-auto mb-4 whitespace-nowrap">
                    <button
                        className="flex items-center space-x-4 bg-red-600 rounded-md p-2 px-4 hover:bg-red-700"
                        onClick={logout}
                    >
                        <IoLogOutOutline size={24} />
                        {!isNavCollapsed && <span>Log out</span>}
                    </button>
                </div>
                {/* User Info */}
                <Link to="profile" className="flex flex-row items-center mt-4 self-center">
                    <img className="w-12 h-12 rounded-full" src={userdata.image} alt="Profile avatar" />
                    {!isNavCollapsed && (
                        <div className="flex flex-col items-start ml-2 whitespace-nowrap">
                            <p className="text-sm font-semibold capitalize">{userdata.firstName} {userdata.lastName}</p>
                            <p className="text-xs">{userdata.role}</p>
                        </div>
                    )}
                </Link>
            </nav>

            {/* Content Section */}
            <div className="w-full flex-1 p-6">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
