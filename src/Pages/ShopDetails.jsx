import React, { useContext, useState, useEffect } from 'react';
import { UserData } from '../Context/UserData';
import "../Styles/Global.css";

const ShopDetails = () => {
    const { shopdata, employees: contextEmployees } = useContext(UserData);
    const [shop, setShop] = useState({});
    const [employees, setEmployees] = useState([]);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (shopdata) {
            setShop(shopdata);
        }
        if (contextEmployees) {
            setEmployees(contextEmployees);
        }
    }, [shopdata, contextEmployees]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShop((prevShop) => ({
            ...prevShop,
            [name]: value,
        }));
    };

    const handleSave = () => {
        setIsEditing(false);
        // Add save logic here
        console.log('Shop details saved:', shop);
    };

    return (
        <div className="flex h-full w-full flex-col overflow-y-scroll text-white scrollbar">
            <div className='p-10 bg-[#1c1917] rounded-2xl shadow-xl'>
            <div className="bg-[#2c076e] border border-[#5a12c5] p-8 rounded-lg shadow-lg mb-10">
                <p className="text-lg font-semibold w-full my-5">Shop Details</p>
                <div className="w-full grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label className=""><strong>Shop Name:</strong></label>
                        <input
                            type="text"
                            name="shopName"
                            value={shop.shopName || ''}
                            onChange={handleChange}
                            className="input"
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="mb-4">
                        <label className=""><strong>Email:</strong></label>
                        <input
                            type="text"
                            name="email"
                            value={shop.email || ''}
                            onChange={handleChange}
                            className="input"
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="mb-4">
                        <label className=""><strong>Status:</strong></label>
                        <input
                            type="text"
                            name="status"
                            value={shop.status || ''}
                            onChange={handleChange}
                            className="input"
                            disabled={!isEditing}
                        />
                    </div>
                    <div>
                        <label><strong>Shop ID:</strong></label>
                        <input
                            type="text"
                            name="shopId"
                            value={shop.shopId || ''}
                            onChange={handleChange}
                            className="input"
                            disabled={!isEditing}
                        />
                    </div>
                </div>
                <div>
                    {isEditing ? (
                        <button onClick={handleSave} className="bg-[#6b16eb] text-white px-6 py-2 rounded">Save</button>
                    ) : (
                        <button onClick={() => setIsEditing(true)} className="bg-[#6b16eb] text-white px-10 py-2 rounded">Edit</button>
                    )}
                </div>
            </div>
            <div className="bg-[#2c076e] border border-[#5a12c5] p-8 rounded-lg shadow-lg mb-10">
                <p className="text-lg font-semibold w-full my-5">Address</p>
                <div className="w-full grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label className=""><strong>Street:</strong></label>
                        <input
                            type="text"
                            name="street"
                            value={shop.address?.street || ''}
                            onChange={handleChange}
                            className="input"
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="mb-4">
                        <label className=""><strong>City:</strong></label>
                        <input
                            type="text"
                            name="city"
                            value={shop.address?.city || ''}
                            onChange={handleChange}
                            className="input"
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="mb-4">
                        <label className=""><strong>State:</strong></label>
                        <input
                            type="text"
                            name="state"
                            value={shop.address?.state || ''}
                            onChange={handleChange}
                            className="input"
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="mb-4">
                        <label className=""><strong>ZIP:</strong></label>
                        <input
                            type="text"
                            name="zip"
                            value={shop.address?.zip || ''}
                            onChange={handleChange}
                            className="input"
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="mb-4">
                        <label className=""><strong>Country:</strong></label>
                        <input
                            type="text"
                            name="country"
                            value={shop.address?.country || ''}
                            onChange={handleChange}
                            className="input"
                            disabled={!isEditing}
                        />
                    </div>
                </div>
            </div>
            <div className="bg-[#2c076e] border border-[#5a12c5] p-8 rounded-lg shadow-lg">
                <p className="text-lg font-semibold w-full my-5">Employees</p>
                <div className="w-full overflow-x-auto">
                    <table className="table-auto w-full text-left text-white">
                        <thead>
                            <tr className="border-b border-[#5a12c5]">
                                <th className="px-4 py-2">Avatar</th>
                                <th className="px-4 py-2">Employee ID</th>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Role</th>
                                <th className="px-4 py-2">Mobile</th>
                                <th className="px-4 py-2">Email</th>

                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee) => (
                                <tr key={employee._id} className="border-b border-[#5a12c5]">
                                    <td className="px-4 py-2">
                                        <img
                                            src={employee.image}
                                            alt={`${employee.firstName} ${employee.lastName}`}
                                            className="w-12 h-12 rounded-full"
                                        />
                                    </td>
                                    <td className="px-4 py-2 capitalize">{employee.employeeId}</td>
                                    <td className="px-4 py-2 capitalize">{employee.firstName} {employee.lastName}</td>
                                    <td className="px-4 py-2 capitalize">{employee.role}</td>
                                    <td className="px-4 py-2 capitalize">{employee.mobile}</td>
                                    <td className="px-4 py-2 capitalize">{employee.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ShopDetails;