import axios from "axios";

export const Product= {
     addProduct : async (product) => {
        try {
            const response = await axios.post(`/api/v1/Product/addProduct`, ...product);
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
            const response = await axios.delete(`/products/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error deleting product: ", error);
        }
    },
}

