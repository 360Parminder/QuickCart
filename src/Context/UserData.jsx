import { createContext, useState } from "react";
import { User } from "../Services/User";


export const UserData = createContext();

export const UserDataProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);

    const login = async (phone,password) => {
        setIsLoading(true);
        const response = await User.loginShop({ phone, password });
        if (response.success) {
            
        } else {
            console.log(response.message);
        }
        setIsLoading(false);
    };

    return (
        <UserData.Provider value={{isLoading, setIsLoading, login,user }}>
            {children}
        </UserData.Provider>
    );
}