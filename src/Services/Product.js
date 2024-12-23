import axios, { all } from "axios";
import GlobalPath from "./GlobalPath";


export const Product= {
    
     addProduct : async (product) => {
        try {
            const response = await GlobalPath.post(`/api/v1/Product/addProduct`, ...product);
            if (response.status === 200 || response.status === 400) {
                return { success: true, message: response.data.message, data: response.data };
            }
            else {
               return { success: false, message: "An error occurred. Please try again." };
            }
        } catch (error) {
            return { success: false, message: "An error occurred. Please try again." };
            // console.error("Error adding product: ", error);
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
        try {
            const response = await GlobalPath.get(`/api/v1/Product/allProducts`,{
                params: {shopId}
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

