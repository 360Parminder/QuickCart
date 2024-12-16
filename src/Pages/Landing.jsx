import { useState } from "react";
import axios from "axios";
const Landing = () => {
        const [name, setName] = useState("");
        const [phone, setPhone] = useState("");
        const [password, setPassword] = useState("");
        const [isLoading, setIsLoading] = useState(false);

        const handleSubmit = async (e) => {
            e.preventDefault();
            if (name === "" || phone === "" || password === "") {
                alert("Please fill all the fields");
                return;
            }
            try {
                setIsLoading(true);
                const response = await axios.post("", {
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
    return (
        <div className=" flex justify-center items-center w-screen h-screen bg-[#000]">
            <form className=" w-full md:w-2/4 h-full md:h-4/6 bg-[#1c1917] flex flex-col justify-center items-center rounded-lg p-10" onSubmit={handleSubmit}>
                <div>
                    <img src={""} alt="logo" className="" />
                </div>
                {/* <div className="form-group">
                    <label className="label">Name</label>
                    <input onChange={(e) => setName(e.target.value)} type="text" className="input" id="name" placeholder="Enter your name" />
                </div> */}
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
                        <div className="bg-[#bc560a] w-4/6 py-2 rounded-md font-semibold flex justify-center items-center">
                            <p className="text-white">Loading...</p>
                        </div>
                    ) : (
                        <button className="bg-[#bc560a] w-4/6 py-2 rounded-md font-semibold " type="submit" >Login</button>
                    )
                }
            </form>
        </div>
    );
}

export default Landing;