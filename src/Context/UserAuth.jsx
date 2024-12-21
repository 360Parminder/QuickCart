import { createContext, useState } from "react";
import { User } from "../Services/User";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    const login = async (phone,password) => {
        setIsLoading(true);
        const response = await User.loginShop(phone, password );
        if (response.success) {
            setIsAuthenticated(true);
            
        } else {
            console.log(response.message);
        }
        setIsLoading(false);
    }
    return (
        <Auth.Provider value={{isAuthenticated, isLoading, login}}>
            {children}
        </Auth.Provider>
    );
};