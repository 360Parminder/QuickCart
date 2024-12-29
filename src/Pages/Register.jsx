import { useState } from "react";
import '../Styles/Global.css';
import { useNavigate } from "react-router-dom";
import { User } from "../Services/User";

const Register = () => {
    const [formData, setFormData] = useState({
        shopName: "",
        ownerFirstName: "",
        ownerLastName: "",
        email: "",
        accountNumber: "",
        holderName: "",
        ifsc: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        mobile: "",
        role: "ShopOwner", // Set default role as ShopOwner
        password: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
            password: name === "mobile" ? value : prevData.password
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { shopName, ownerFirstName, ownerLastName, mobile, password } = formData;
        
        if (!shopName || !ownerFirstName || !ownerLastName || !mobile || !password) {
            alert("Please fill all the required fields");
            return;
        }

        try {
            setIsLoading(true);
            const response = await User.RegisterShop(formData);
            if (response.success) {
                alert("Shop Registered Successfully");
                setIsLoading(false);
                // navigate('/success'); // Navigate to a success page or another route
            } else {
                alert(response.message);
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
                    <label className="label">Owner First Name</label>
                    <input 
                        onChange={handleChange} 
                        type="text" 
                        name="ownerFirstName" 
                        className="input" 
                        placeholder="Enter owner first name" 
                    />
                </div>
                <div className="form-group">
                    <label className="label">Owner Last Name</label>
                    <input 
                        onChange={handleChange} 
                        type="text" 
                        name="ownerLastName" 
                        className="input" 
                        placeholder="Enter owner last name" 
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
                    <label className="label">Account Number</label>
                    <input 
                        onChange={handleChange} 
                        type="text" 
                        name="accountNumber" 
                        className="input" 
                        placeholder="Enter account number" 
                    />
                </div>
                <div className="form-group">
                    <label className="label">Account Holder Name</label>
                    <input 
                        onChange={handleChange} 
                        type="text" 
                        name="holderName" 
                        className="input" 
                        placeholder="Enter account holder name" 
                    />
                </div>
                <div className="form-group">
                    <label className="label">IFSC Code</label>
                    <input 
                        onChange={handleChange} 
                        type="text" 
                        name="ifsc" 
                        className="input" 
                        placeholder="Enter IFSC code" 
                    />
                </div>
                <div className="form-group">
                    <label className="label">Street</label>
                    <input 
                        onChange={handleChange} 
                        type="text" 
                        name="street" 
                        className="input" 
                        placeholder="Enter street" 
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
                    <label className="label">Zip</label>
                    <input 
                        onChange={handleChange} 
                        type="text" 
                        name="zip" 
                        className="input" 
                        placeholder="Enter zip" 
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
                    <label className="label">Phone Number</label>
                    <input 
                        onChange={handleChange} 
                        type="text" 
                        name="mobile" 
                        className="input" 
                        placeholder="Enter phone number" 
                    />
                </div>
                <div className="form-group">
                    <label className="label">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        className="input" 
                        value={formData.mobile} 
                        disabled 
                    />
                    <p className="text-gray-500 text-sm">Password will be automatically set as the phone number</p>
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
