import { useState } from "react";
import '../Styles/Global.css';
import axios from "axios";
// import logo from "../Assets/Images/logo.png";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [amount, setAmount] = useState(0);
    const [mobile, setMobile] = useState("");
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name === "" || phone === "" || password === "") {
            alert("Please fill all the fields");
            return;
        }
        try {
            setIsLoading(true);
            const response = await axios.post("https://foodplanet.me/api/v1/user/register", {
                "username": name,
                "role": "admin",
                "password": password,
                "mobile": parseInt(phone)
            }, {
                withCredentials: true
            })
            if (response.status === 200) {
                alert("Admin Registered Successfully");
                setIsLoading(false);
            }
            else {
                alert(response.data.message);
                setIsLoading(false);
            }

        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
            setIsLoading(false);
        }
    };
    const makePayment = () => {
        if (userName === "" || mobile === "" || amount === 0) {
            alert("Please fill all the fields");
            return;
        }
        navigate('/razorpay', { state: { amount, mobile, userName } });
    }

    return (
        <div className="w-screen h-screen bg-gray-900 flex justify-center items-center">
                    {/* <div className=" absolute top-5">
                        <button onClick={()=>navigate('/ProductPage')}>View Products</button>
                    </div> */}
           
            <div className="flex flex-col justify-center items-center mt-10 p-10 bg-slate-600 rounded-lg">
                <h3 className=" text-2xl font-semibold mb-5">Payment Towards Manjeeta Devi</h3>
                <input className="input" type="text" placeholder="Enter your Amount" onChange={(e) => setAmount(e.target.value)} required />
                <input className="input" type="text" placeholder="Enter your mobile" onChange={(e) => setMobile(e.target.value)} required />
                <input className="input" type="text" placeholder="Enter your name" onChange={(e) => setUserName(e.target.value)} required />

                <button onClick={() => makePayment()} className="bg-[#bc560a] w-4/6 py-2 rounded-md font-semibold " type="submit" >Pay</button>
            </div>
           
        </div>
    );
}

export default Register;