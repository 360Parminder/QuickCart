
import GlobalPath from "./GlobalPath";

export const User={
    RegisterShop: async (data) => {
        try {
            const response = await GlobalPath.post("/api/v1/registerShop", {
                ...data
            });
            if (response.status === 200 || response.status === 400) {
                return { success: true, message: response.data.message, data: response.data };
            } else {
                throw new Error(`Unexpected status code: ${response.status}`);
            }
        } catch (error) {
            if (error.response) {
                // Server responded with a status outside 2xx
                console.error(`Error: ${error.response.data.message || "Unknown error from server"}`);
                return { success: false, message: error.response.data.message || "Server error occurred" };
            } else if (error.request) {
                // No response from the server
                console.error("Error: No response received from the server.");
                return { success: false, message: "No response from the server. Please try again later." };
            } else {
                // Something went wrong during the request setup
                console.error(`Error: ${error.message}`);
                return { success: false, message: "An error occurred. Please try again." };
            }
        }
    },
    loginShop: async (phone,password) => {
        try {
            const response = await GlobalPath.post("/api/v1/login", {
                mobile:phone,
                password
            });
            
            if (response.status === 200 || response.status === 400) {
                return { success: true, message: response.data.message, data: response.data };
            } else {
                throw new Error(`Unexpected status code: ${response.status}`);
            }
        } catch (error) {
            if (error.response) {
                // Server responded with a status outside 2xx
                console.error(`Error: ${error.response.data.message || "Unknown error from server"}`);
                return { success: false, message: error.response.data.message || "Server error occurred" };
            } else if (error.request) {
                // No response from the server
                console.error("Error: No response received from the server.");
                return { success: false, message: "No response from the server. Please try again later." };
            } else {
                // Something went wrong during the request setup
                console.error(`Error: ${error.message}`);
                return { success: false, message: "An error occurred. Please try again." };
            }
        }
    },
    profile : async (token) => {
        try {
            const response = await GlobalPath.get("/api/v1/user/me", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response);
            
            if (response.status === 200 || response.status === 400) {
                return { success: true, message: response.data.message, data: response.data.user };
            } else {
                throw new Error(`Unexpected status code: ${response.status}`);
            }
        } catch (error) {
            if (error.response) {
                // Server responded with a status outside 2xx
                console.error(`Error: ${error.response.data.message || "Unknown error from server"}`);
                return { success: false, message: error.response.data.message || "Server error occurred" };
            } else if (error.request) {
                // No response from the server
                console.error("Error: No response received from the server.");
                return { success: false, message: "No response from the server. Please try again later." };
            } else {
                // Something went wrong during the request setup
                console.error(`Error: ${error.message}`);
                return { success: false, message: "An error occurred. Please try again." };
            }
        }
    },
    updateProfile: async (token, data) => {
        try {
            const response = await GlobalPath.put("/api/v1/user/me", {
                ...data
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.status === 200 || response.status === 400) {
                return { success: true, message: response.data.message, data: response.data.user };
            } else {
                throw new Error(`Unexpected status code: ${response.status}`);
            }
        } catch (error) {
            if (error.response) {
                // Server responded with a status outside 2xx
                console.error(`Error: ${error.response.data.message || "Unknown error from server"}`);
                return { success: false, message: error.response.data.message || "Server error occurred" };
            } else if (error.request) {
                // No response from the server
                console.error("Error: No response received from the server.");
                return { success: false, message: "No response from the server. Please try again later." };
            } else {
                // Something went wrong during the request setup
                console.error(`Error: ${error.message}`);
                return { success: false, message: "An error occurred. Please try again." };
            }
        }
    }
    
}