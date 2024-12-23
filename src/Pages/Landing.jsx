import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "../Context/UserAuth";
import logo from '../Assets/Images/logo.png';
const Landing = () => {
    const navigate = useNavigate();
    const { login,isLoading } = useContext(Auth);
        const [phone, setPhone] = useState("");
        const [password, setPassword] = useState("");

        const handleSubmit = async (e) => {
            e.preventDefault();
             await login(phone, password);
           
        };
    return (
        <div className=" flex flex-col justify-center items-center w-screen h-screen bg-[#000]">
            <form className=" w-full md:w-2/4 h-full md:h-4/6 bg-[#1c1917] flex flex-col justify-center items-center rounded-lg p-10" onSubmit={handleSubmit}>
                <div>
                    <img src={logo} alt="logo" className="" />
                </div>
                <div className="form-group">
                    <label className="label">Phone no</label>
                    <input onChange={(e) => setPhone(e.target.value)} type="text" className="input" id="phone" placeholder="Enter your phone no" />
                </div>
                <div className="form-group">
                    <label className="label">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" className="input" id="password" placeholder="Enter your password" />
                </div>

                {
                    isLoading ? (
                        <div className="bg-[#7B2BFF] w-4/6 py-2 rounded-md font-semibold flex justify-center items-center">
                            <p className="text-white">Loading...</p>
                        </div>
                    ) : (
                        <button className="bg-[#7B2BFF] w-4/6 py-2 rounded-md font-semibold text-white " type="submit" >Login</button>
                    )
                }
            </form>
            <button className=" text-white" onClick={()=>navigate('/Register')}>
                Not Registered
            </button>
        </div>
    );
}

export default Landing;