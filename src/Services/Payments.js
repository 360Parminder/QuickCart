import Cookies from 'js-cookie';
import GlobalPath from './GlobalPath';


export const Payments = {
    getOrderId: async (amount, receiptId) => {
        const token = Cookies.get("Authtoken");
        try {
            const response = await GlobalPath.post(
                `/api/v1/payment/generateOrderId`,
                {
                    amount,
                    receiptId,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log("Order ID response:", response.data);
            

            if (response.status === 200 || response.status === 201) {
                return { success: true, message: response.data.message, data: response.data.orderId };
            } else {
                return { success: false, message: "An error occurred. Please try again." };
            }
        } catch (error) {
            console.error("Error getting order ID: ", error);
            return { success: false, message: error.response?.data?.message || "An error occurred. Please try again." };
        }
    },
    generateBill: async (cart, orderId, customer,amount, paymentMode,status,razorpayOrderId,razorpayPaymentId,razorpaySignature) => {
        const token = Cookies.get("Authtoken");
        console.log(status);
        
        try {
            const response = await GlobalPath.post(
                `/api/v1/payment/generatePayment`,
                {
                    receiptId: orderId,
                  amount:amount,
                  paymentMethod: paymentMode,
                  customerName: customer.name,
                  mobile: customer.mobile,
                email: customer.email,
                  items:cart,
                  status:status,
                  razorpayOrderId:razorpayOrderId?razorpayOrderId:null,
                  razorpayPaymentId:razorpayPaymentId?razorpayPaymentId:null,
                  razorpaySignature:razorpaySignature?razorpaySignature:null
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log("Generate bill response:", response.data);
            

            if (response.status === 200 || response.status === 201) {
                return { success: true, message: response.data.message };
            } else {
                return { success: false, message: "An error occurred. Please try again." };
            }
        } catch (error) {
            console.error("Error generating bill: ", error);
            return { success: false, message: error.response?.data?.message || "An error occurred. Please try again." };
        }
    },
    getPayments: async () => {
        const token = Cookies.get("Authtoken");
        try {
            const response = await GlobalPath.get(`/api/v1/payment/allPayments`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.status === 200 || response.status === 201) {
                return { success: true, message: response.data.message, data: response.data.payments };
            } else {
                return { success: false, message: "An error occurred. Please try again." };
            }
        } catch (error) {
            console.error("Error getting payments: ", error);
            return { success: false, message: error.response?.data?.message || "An error occurred. Please try again." };
        }
    },
};