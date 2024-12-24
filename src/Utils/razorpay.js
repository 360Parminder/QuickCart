import { makeOrderID } from "./generateReceiptId";

export const handlePayment = async (amount,receiptId,mobile,username) => {
    const { orderId } = await makeOrderID(amount, receiptId);
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY, // Enter your Key ID from Razorpay Dashboard
      amount: amount * 100, // Amount in subunits (e.g. 50000 paise = INR 500)
      currency: "INR",
      name: "Quick cart",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderId, // This is a sample order ID, pass the `id` obtained from your backend API
      handler: function (response) {
        alert(`Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: username,
        email: "test@gmail.com", // email
        contact: mobile.toString(),
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new window.Razorpay(options);

    rzp1.on('payment.failed', function (response) {
      console.log(response);
      alert(`Payment Failed: ${response.error.description}`);
      alert(`Code: ${response.error.code}`);
      alert(`Source: ${response.error.source}`);
      alert(`Step: ${response.error.step}`);
      alert(`Reason: ${response.error.reason}`);
      alert(`Order ID: ${response.error.metadata.order_id}`);
      alert(`Payment ID: ${response.error.metadata.payment_id}`);
    });

    rzp1.open();
  };