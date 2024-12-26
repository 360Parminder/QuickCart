import React, { useState } from 'react';

const RegisterEmployee = () => {
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        password: '',
        mobile: '',
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
        if (!formData.name) newErrors.name = 'Name is required.';
        if (!formData.role) newErrors.role = 'Role is required.';
        if (!formData.mobile || formData.mobile.length !== 10)
            newErrors.mobile = 'Mobile number must be 10 digits.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);

        setTimeout(() => {
            console.log('Form data submitted:', formData);
            setLoading(false);
            alert('Employee registered successfully!');
            setFormData({ name: '', role: '', password: '', mobile: '' }); // Reset form
            setErrors({}); // Clear errors
        }, 2000); // Simulate an API call
    };

    return (
        <div className="w-full p-6 border border-[#5a12c5] rounded-lg shadow-lg text-white bg-[#2c076e]">
            <h2 className="text-center text-2xl font-bold mb-6">Register Employee</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                        placeholder="Employee Name"
                    />
                    {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
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
                        <option value="CounterEmployee">Counter Employee</option>
                        <option value="InventoryManager">Inventory Manager</option>
                        <option value="Healer">Helper</option>
                        <option value="Delivery">Delivery</option>
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
                <button
                    type="submit"
                    className={`w-full p-2 text-white rounded ${loading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'}`}
                    disabled={loading}
                >
                    {loading ? 'Registering...' : 'Register'}
                </button>
            </form>
        </div>
    );
};

export default RegisterEmployee;
