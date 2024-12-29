
import GlobalPath from "./GlobalPath";
import Cookies from "js-cookie";


export const Product= {
    
    addProduct: async (product) => {
        console.log(product);
        
        const token = Cookies.get("Authtoken");
        try {
            const response = await GlobalPath.post(
                `/api/v1/Product/addProduct`,
                product,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log(response.data);
    
            if (response.status === 200 || response.status === 201) {
                return { success: true, message: response.data.message, data: response.data };
            } else {
                return { success: false, message: "An error occurred. Please try again." };
            }
        } catch (error) {
            console.error("Error adding product: ", error);
            return { success: false, message: error.response?.data?.message || "An error occurred. Please try again." };
        }
    },
    

    deleteProduct : async (id) => {
        try {
            const response = await GlobalPath.delete(`/products/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error deleting product: ", error);
        }
    },
    allProducts : async (shopId) => {
        const token = Cookies.get("Authtoken");
        try {
            const response = await GlobalPath.get(`/api/v1/Product/allProducts`,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            
            if(response.status === 200){
                return { success: true, message: response.data.message, data: response.data.products };
            }
            else{
                return { success: false, message: "An error occurred. Please try again." };
            }
        } catch (error) {
           return { success: false, message: "An error occurred. Please try again." };
        }
    },
}

