import { useState } from "react";
import "../Styles/Global.css";
import { useNavigate } from "react-router-dom";
import { User } from "../Services/User";

const InputField = ({ label, name, type, placeholder, value, onChange, disabled = false, helperText }) => (
    <div className="form-group">
        <label className="label">{label}</label>
        <input
            type={type}
            name={name}
            className="input"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
        />
        {helperText && <p className="text-gray-500 text-sm">{helperText}</p>}
    </div>
);

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
        role: "ShopOwner", // Default role
    });
    const [isLoading, setIsLoading] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const validateForm = () => {
        const errors = {};
        const requiredFields = ["shopName", "ownerFirstName", "ownerLastName", "mobile"];
        requiredFields.forEach((field) => {
            if (!formData[field]) errors[field] = `${field} is required`;
        });
        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const payload = { ...formData, password: formData.mobile }; // Derive password from mobile
        try {
            setIsLoading(true);
            const response = await User.RegisterShop(payload);
            setIsLoading(false);
            if (response.success) {
                alert("Shop Registered Successfully");
                navigate("/success");
            } else {
                alert(response.message);
            }
        } catch (error) {
            console.error(error);
            alert(error.response?.data?.message || "Something went wrong");
            setIsLoading(false);
        }
    };

    return (
        <div className="w-screen h-screen bg-[#000] flex justify-center items-center text-[#fff]">
            <form
                className="w-full md:w-5/6 h-full  bg-[#1c1917] grid grid-cols-1 md:grid-cols-3 gap-4 md:justify-center md:items-center rounded-lg p-1 md:p-10"
                onSubmit={handleSubmit}
            >
                <InputField
                    label="Shop Name"
                    name="shopName"
                    type="text"
                    placeholder="Enter shop name"
                    value={formData.shopName}
                    onChange={handleChange}
                />
                <InputField
                    label="Owner First Name"
                    name="ownerFirstName"
                    type="text"
                    placeholder="Enter owner first name"
                    value={formData.ownerFirstName}
                    onChange={handleChange}
                />
                <InputField
                    label="Owner Last Name"
                    name="ownerLastName"
                    type="text"
                    placeholder="Enter owner last name"
                    value={formData.ownerLastName}
                    onChange={handleChange}
                />
                <InputField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <InputField
                    label="Account Number"
                    name="accountNumber"
                    type="text"
                    placeholder="Enter account number"
                    value={formData.accountNumber}
                    onChange={handleChange}
                />
                <InputField
                    label="Account Holder Name"
                    name="holderName"
                    type="text"
                    placeholder="Enter account holder name"
                    value={formData.holderName}
                    onChange={handleChange}
                />
                <InputField
                    label="IFSC Code"
                    name="ifsc"
                    type="text"
                    placeholder="Enter IFSC code"
                    value={formData.ifsc}
                    onChange={handleChange}
                />
                <InputField
                    label="Street"
                    name="street"
                    type="text"
                    placeholder="Enter street"
                    value={formData.street}
                    onChange={handleChange}
                />
                <InputField
                    label="City"
                    name="city"
                    type="text"
                    placeholder="Enter city"
                    value={formData.city}
                    onChange={handleChange}
                />
                <InputField
                    label="State"
                    name="state"
                    type="text"
                    placeholder="Enter state"
                    value={formData.state}
                    onChange={handleChange}
                />
                <InputField
                    label="Zip"
                    name="zip"
                    type="text"
                    placeholder="Enter zip"
                    value={formData.zip}
                    onChange={handleChange}
                />
                <InputField
                    label="Country"
                    name="country"
                    type="text"
                    placeholder="Enter country"
                    value={formData.country}
                    onChange={handleChange}
                />
                <InputField
                    label="Phone Number"
                    name="mobile"
                    type="text"
                    placeholder="Enter phone number"
                    value={formData.mobile}
                    onChange={handleChange}
                />
                <InputField
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Password will auto-fill as mobile"
                    value={formData.mobile}
                    disabled
                    helperText="Password will be automatically set as the phone number"
                />
                {Object.keys(validationErrors).length > 0 && (
                    <div className="col-span-3 text-red-500">
                        <ul>
                            {Object.entries(validationErrors).map(([field, error]) => (
                                <li key={field}>{error}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className=" col-span-3 flex flex-col justify-center items-center">
                    <button
                        className="bg-[#6b16eb] w-4/6 py-2 rounded-md font-semibold"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? "Registering..." : "Register Shop"}
                    </button>
                    <p className="mt-4">Already have a registered shop?</p>
                </div>
            </form>
        </div>
    );
};

export default Register;
