import { useState } from "react";
import '../Styles/Global.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [formData, setFormData] = useState({
        shopImage: "",
        shopName: "",
        ownerName: "",
        phone: "",
        password: "",
        email: "",
        bankAccountNo: "",
        bankAccountHolderName: "",
        ifscCode: "",
        city: "",
        state: "",
        country: "",
        pincode: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { shopName, ownerName, phone, password } = formData;
        
        if (!shopName || !ownerName || !phone || !password) {
            alert("Please fill all the required fields");
            return;
        }

        try {
            setIsLoading(true);
            const response = await axios.post("https://foodplanet.me/api/v1/user/register", {
                username: ownerName,
                role: "admin",
                password,
                mobile: parseInt(phone)
            }, {
                withCredentials: true
            });

            if (response.status === 200) {
                alert("Admin Registered Successfully");
                setIsLoading(false);
            } else {
                alert(response.data.message);
                setIsLoading(false);
            }
        } catch (error) {
            console.error(error);
            alert(error.response?.data?.message || "Something went wrong");
            setIsLoading(false);
        }
    };

    return (
        <div className="w-screen h-screen bg-gray-900 flex justify-center items-center">
            <form 
                className="w-full md:w-5/6 h-full md:h-[90%] bg-[#1c1917] grid grid-cols-1 md:grid-cols-3 gap-4 md:justify-center md:items-center rounded-lg p-2 md:p-10" 
                onSubmit={handleSubmit}
            >
                <div className="form-group">
                    <label className="label">Shop Image</label>
                    <input 
                        onChange={handleChange} 
                        type="text" 
                        name="shopImage" 
                        className="input" 
                        placeholder="Enter shop image URL" 
                    />
                </div>
                <div className="form-group">
                    <label className="label">Shop Name</label>
                    <input 
                        onChange={handleChange} 
                        type="text" 
                        name="shopName" 
                        className="input" 
                        placeholder="Enter shop name" 
                    />
                </div>
                <div className="form-group">
                    <label className="label">Owner Name</label>
                    <input 
                        onChange={handleChange} 
                        type="text" 
                        name="ownerName" 
                        className="input" 
                        placeholder="Enter owner name" 
                    />
                </div>
                <div className="form-group">
                    <label className="label">Phone Number</label>
                    <input 
                        onChange={handleChange} 
                        type="text" 
                        name="phone" 
                        className="input" 
                        placeholder="Enter phone number" 
                    />
                </div>
                <div className="form-group">
                    <label className="label">Password</label>
                    <input 
                        onChange={handleChange} 
                        type="password" 
                        name="password" 
                        className="input" 
                        placeholder="Enter password" 
                    />
                </div>
                <div className="form-group">
                    <label className="label">Email</label>
                    <input 
                        onChange={handleChange} 
                        type="email" 
                        name="email" 
                        className="input" 
                        placeholder="Enter email" 
                    />
                </div>
                <div className="form-group">
                    <label className="label">Bank Account Number</label>
                    <input 
                        onChange={handleChange} 
                        type="text" 
                        name="bankAccountNo" 
                        className="input" 
                        placeholder="Enter bank account number" 
                    />
                </div>
                <div className="form-group">
                    <label className="label">Account Holder Name</label>
                    <input 
                        onChange={handleChange} 
                        type="text" 
                        name="bankAccountHolderName" 
                        className="input" 
                        placeholder="Enter account holder name" 
                    />
                </div>
                <div className="form-group">
                    <label className="label">IFSC Code</label>
                    <input 
                        onChange={handleChange} 
                        type="text" 
                        name="ifscCode" 
                        className="input" 
                        placeholder="Enter IFSC code" 
                    />
                </div>
                <div className="form-group">
                    <label className="label">City</label>
                    <input 
                        onChange={handleChange} 
                        type="text" 
                        name="city" 
                        className="input" 
                        placeholder="Enter city" 
                    />
                </div>
                <div className="form-group">
                    <label className="label">State</label>
                    <input 
                        onChange={handleChange} 
                        type="text" 
                        name="state" 
                        className="input" 
                        placeholder="Enter state" 
                    />
                </div>
                <div className="form-group">
                    <label className="label">Country</label>
                    <input 
                        onChange={handleChange} 
                        type="text" 
                        name="country" 
                        className="input" 
                        placeholder="Enter country" 
                    />
                </div>
                <div className="form-group">
                    <label className="label">Pincode</label>
                    <input 
                        onChange={handleChange} 
                        type="text" 
                        name="pincode" 
                        className="input" 
                        placeholder="Enter pincode" 
                    />
                </div>

                <div className="form-group col-span-2 flex justify-center items-center">
                    {isLoading ? (
                        <div className="bg-[#bc560a] w-4/6 py-2 rounded-md font-semibold flex justify-center items-center">
                            <p className="text-white">Loading...</p>
                        </div>
                    ) : (
                        <button 
                            className="bg-[#bc560a] w-4/6 py-2 rounded-md font-semibold" 
                            type="submit"
                        >
                            Register Admin
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Register;
