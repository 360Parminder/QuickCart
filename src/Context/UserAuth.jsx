import { createContext, useEffect, useState } from "react";
import { User } from "../Services/User";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState("");
    
    useEffect(() => {
        const token = Cookies.get("Authtoken");
        if (token) {
            setIsAuthenticated(true);
            setToken(token);
        }
    }, []);
    const login = async (phone,password) => {
        setIsLoading(true);
        const response = await User.loginShop(phone, password );
        if (response.success) {
            setIsAuthenticated(true);
            navigate('/Dashboard');
            Cookies.set("Authtoken", response.data.token);
            setToken(response.data.token);
        } else {
            console.log(response.message);
        }
        setIsLoading(false);
    }
    const logout = async() => {
        setIsAuthenticated(false);
        navigate('/');
        Cookies.remove("Authtoken");
        setToken("");
        localStorage.clear();
    }
    return (
        <Auth.Provider value={{isAuthenticated, isLoading, login, logout,token}}>
            {children}
        </Auth.Provider>
    );
};