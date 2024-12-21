import { createContext, useState } from "react";
import { User } from "../Services/User";


export const UserData = createContext();

export const UserDataProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState({
        name: "parminder",
        phone: "1234567890",
        email: "test@mail.com",
        role: "Owner",
    });

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