import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "../Context/UserAuth";
import logo from '../Assets/Images/logo.png';
import {IoNavigate} from "react-icons/io5"
import Loader from "../Components/Loader";
const Landing = () => {
    const navigate = useNavigate();
    const { login,isLoading } = useContext(Auth);
        const [phone, setPhone] = useState("");
        const [password, setPassword] = useState("");

        const handleSubmit = async (e) => {
            e.preventDefault();
            if (!phone || !password) {
                alert("Please fill all the fields");
                return;
            }
         const response = await login(phone, password);
            if(!response.success){
                alert(response.message);
            }  
        };
    return (
        <div className=" flex flex-col justify-center items-center w-screen h-screen bg-[#000]">
            <form className=" w-full md:w-2/4 h-full md:h-4/6 bg-[#1c1917] flex flex-col justify-center items-center rounded-lg p-10" onSubmit={handleSubmit}>
                <div>
                    <img src={logo} alt="logo" className="" />
                </div>
                <div className="form-group w-[60%]">
                    <label className="label">Phone no</label>
                    <input onChange={(e) => setPhone(e.target.value)} type="text" className="input" id="phone" placeholder="Enter your phone no" />
                </div>
                <div className="form-group w-[60%]">
                    <label className="label">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" className="input" id="password" placeholder="Enter your password" />
                </div>

                {
                    isLoading ? (
                        <div className="bg-[#7B2BFF] w-[60%] py-2 rounded-md font-semibold flex justify-center items-center mt-5">
                            <Loader />
                        </div>
                    ) : (
                        <button className="bg-[#7B2BFF] w-[60%] py-2 rounded-md font-semibold text-white mt-5 " type="submit" >Login</button>
                    )
                }
            </form>
            <div className="flex flex-col justify-center items-center text-white mt-5 gap-2">
                <p>Don't have a registered shop? Click below to register now!</p>
            <button className=" text-white bg-[#7B2BFF] p-2 rounded-md flex items-center gap-1" onClick={()=>navigate('/Register')}>Register <IoNavigate size={16}/></button>
            </div>
        </div>
    );
}

export default Landing;