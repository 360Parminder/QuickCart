import React, { useState, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Auth } from '../Context/UserAuth';
import { IoHomeOutline, IoPersonOutline, IoCartOutline, IoStatsChartOutline, IoConstructOutline, IoPeopleOutline, IoLogOutOutline } from 'react-icons/io5';

const Dashboard = () => {
    const { logout } = useContext(Auth);
    const [isNavCollapsed, setIsNavCollapsed] = useState(false);

    return (
        <div className="flex w-full h-screen">
            {/* Navigation Section */}
            <nav
                onMouseEnter={() => setIsNavCollapsed(false)}
                onMouseLeave={() => setIsNavCollapsed(true)}
                className={`${
                    isNavCollapsed ? 'w-16' : 'w-64'
                } transition-all duration-300 bg-gray-800 text-white h-5/6 overflow-hidden mx-3 my-2 rounded-lg shadow-lg`}
            >
                <h1
                    className={`${
                        isNavCollapsed ? 'opacity-0' : 'opacity-100'
                    } text-2xl font-bold mb-6 transition-opacity duration-300 p-4`}
                >
                    {isNavCollapsed ? '' : 'Dashboard'}
                </h1>
                <ul className="space-y-4 flex flex-col items-start">
                    <li>
                        <Link to="Home" className="flex items-center space-x-4 hover:text-gray-300 px-4">
                            <IoHomeOutline size={24} />
                            {!isNavCollapsed && <span>Home</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="profile" className="flex items-center space-x-4 hover:text-gray-300 px-4">
                            <IoPersonOutline size={24} />
                            {!isNavCollapsed && <span>Profile</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="add-delete-products" className="flex items-center space-x-4 hover:text-gray-300 px-4">
                            <IoCartOutline size={24} />
                            {!isNavCollapsed && <span>Add/Delete Products</span>}
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
                        <Link to="Products" className="flex items-center space-x-4 hover:text-gray-300 px-4">
                            <IoCartOutline size={24} />
                            {!isNavCollapsed && <span>Generate Bill</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="register-employee" className="flex items-center space-x-4 hover:text-gray-300 px-4">
                            <IoPeopleOutline size={24} />
                            {!isNavCollapsed && <span>Register Employee</span>}
                        </Link>
                    </li>
                    <li>
                        <button
                            className="flex items-center space-x-4 bg-red-600 rounded-md p-2 px-4 hover:bg-red-700"
                            onClick={() => logout()}
                        >
                            <IoLogOutOutline size={24} />
                            {!isNavCollapsed && <span>Log out</span>}
                        </button>
                    </li>
                </ul>
            </nav>

            {/* Content Section */}
            <div className="w-full flex-1 p-6">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
