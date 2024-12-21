import React, { useState } from 'react';

const RegisterEmployee = () => {
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        password: '',
        mobile: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-lg bg-gray-100">
            <h2 className="text-center text-2xl font-bold mb-6">Register Employee</h2>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Role:</label>
                    <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Password (Mobile Number):</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Mobile Number:</label>
                    <input
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Register</button>
            </form>
        </div>
    );
};

export default RegisterEmployee;
