import { createContext, useContext, useEffect, useState } from "react";
import { User } from "../Services/User";
import { Auth } from "./UserAuth";



export const UserData = createContext();

export const UserDataProvider = ({ children }) => {
    const {token}= useContext(Auth);
    const [isLoading, setIsLoading] = useState(false);
    const [userdata, setUserdata] = useState({});
    const [shopdata, setShopdata] = useState({});
    const [ employees, setEmployees] = useState([]);
    const profile = async (token) => {
        setIsLoading(true);
        const response = await User.profile(token);
        if (response.success) {
            setUserdata(response.data);
        } else {
            console.log(response.message);
        }
        setIsLoading(false);
    }
    const shopProfile = async (token) => {
        setIsLoading(true);
        const response = await User.shopProfile(token);
        if (response.success) {
            setShopdata(response.data);
        } else {
            console.log(response.message);
        }
        setIsLoading(false);
    }
    const allEmployees = async (token) => {
        setIsLoading(true);
        const response = await User.allEmployees(token);
        if (response.success) {
            setEmployees(response.data);
        } else {
            console.log(response.message);
        }
        setIsLoading(false);
    }
    useEffect(() => {
        if (token) {
            profile(token);
            shopProfile(token);
            allEmployees(token);
        }
    }, [token]);
    const updateProfile = async (data) => {
        setIsLoading(true);
        const response = await User.updateProfile(token, data);
        if (response.success) {
            setUserdata(response.data);
        } else {
            console.log(response.message);
        }
        setIsLoading(false);
    }

    return (
        <UserData.Provider value={{isLoading, setIsLoading,userdata,shopdata,employees }}>
            {children}
        </UserData.Provider>
    );
}