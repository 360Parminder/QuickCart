import React, { useState } from 'react';
import { User } from '../Services/User';

const RegisterEmployee = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        role: '',
        password: '',
        mobile: '',
        email: '',
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const rolePlaceholder = {
        "counter boy": "Focuses on billing and payments.",
        "inventory manager": "Manages inventory and stock.",
        helper: "Supports various tasks in the store.",
        HR: "Handles employee-related tasks.",
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'mobile' && isNaN(value)) return; // Allow only numeric input for mobile

        setFormData((prevData) => {
            const updatedData = {
                ...prevData,
                [name]: value,
            };

            // Automatically set password to mobile
            if (name === 'mobile') {
                updatedData.password = value;
            }

            return updatedData;
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstname) newErrors.firstname = 'First name is required.';
        if (!formData.lastname) newErrors.lastname = 'Last name is required.';
        if (!formData.role) newErrors.role = 'Role is required.';
        if (!formData.mobile || formData.mobile.length !== 10)
            newErrors.mobile = 'Mobile number must be 10 digits.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);
        const response = await User.registerEmployee(formData)
        if (response.success) {
            alert(response.message)
            setFormData({
                firstname: '',
                lastname: '',
                role: '',
                password: '',
                mobile: '',
                email: '',
            });
        }
        else{
            alert(response.message)
        }
        setLoading(false);
    };

    return (
        <div className="w-full p-6 border border-[#5a12c5] rounded-lg shadow-lg text-white bg-[#2c076e]">
            <h2 className="text-center text-2xl font-bold mb-6">Register Employee</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">First Name:</label>
                    <input
                        type="text"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                        placeholder="First Name"
                    />
                    {errors.firstname && <div className="text-red-500 text-sm">{errors.firstname}</div>}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Last Name:</label>
                    <input
                        type="text"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                        placeholder="Last Name"
                    />
                    {errors.lastname && <div className="text-red-500 text-sm">{errors.lastname}</div>}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Role:</label>
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                        placeholder="Select Role"
                    >
                        <option value="">Select Role</option>
                        <option value="counter boy">Counter Boy</option>
                        <option value="inventory manager">Inventory Manager</option>
                        <option value="helper">Helper</option>
                        <option value="HR">HR</option>
                    </select>
                    {errors.role && <div className="text-red-500 text-sm">{errors.role}</div>}
                    <small className="text-gray-400">{rolePlaceholder[formData.role] || 'Please select a role.'}</small>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Password (Mobile Number):</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        disabled
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-gray-200"
                        placeholder="Password"
                    />
                    <small className="text-gray-400">Password is auto-set to the mobile number.</small>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Mobile Number:</label>
                    <input
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                        placeholder="Mobile Number"
                    />
                    {errors.mobile && <div className="text-red-500 text-sm">{errors.mobile}</div>}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                        placeholder="Email"
                    />
                    {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
                </div>
                <div className="mb-4 col-span-2">
                    <button
                        type="submit"
                        className={`w-full p-2 text-white rounded ${loading ? 'bg-gray-500' : 'bg-[#6b16eb] text-white hover:bg-[#7b2bff]'}`}
                        disabled={loading}
                    >
                        {loading ? 'Registering...' : 'Register'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisterEmployee;
