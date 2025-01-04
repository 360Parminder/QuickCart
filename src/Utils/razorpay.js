import { Payments } from "../Services/Payments";

export const handlePayment = async (amount, receiptId, mobile, username, email = "default@example.com") => {

 const orderId =await Payments.getOrderId(amount, receiptId);
  try {
    // Generate order ID from the backend
    
    return new Promise((resolve, reject) => {
      // Razorpay payment options
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY, // Public key from Razorpay Dashboard
        amount: amount * 100, // Amount in subunits (e.g., 50000 paise = INR 500)
        currency: "INR",
        name: "Quick Cart",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: orderId.data, // Order ID from backend
        handler: function (response) {
          console.log("Payment successful", response);
          
          // Resolve the promise with payment details
          resolve({
            success: true,
            paymentId: response.razorpay_payment_id,
            signature: response.razorpay_signature,
            orderId: response.razorpay_order_id,
          });
        },
        prefill: {
          name: username,
          email: email, // Dynamic email
          contact: mobile.toString(),
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      // Initialize Razorpay instance
      const rzp1 = new window.Razorpay(options);

      // Handle payment failure
      rzp1.on("payment.failed", function (response) {
        console.error("Payment Failed", response);
        reject({
          success: false,
          error: response.error.description,
          code: response.error.code,
          source: response.error.source,
          step: response.error.step,
          reason: response.error.reason,
          orderId: response.error.metadata.order_id,
          paymentId: response.error.metadata.payment_id,
        });
      });

      // Open Razorpay popup
      rzp1.open();
    });
  } catch (error) {
    console.error("Error in payment processing:", error);
    return { success: false, error: error.message };
  }
};
