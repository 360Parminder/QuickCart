import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { makeOrderID } from '../Utils/generateReceiptId';

const Razorpay = () => {
  const location = useLocation();
  const amount = location.state?.amount || 0;
  const mobile = location.state?.mobile || 1234567890;
  const username = location.state?.userName || "Test User";
  const receiptId = location.state?.receiptId || 0;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async () => {
    const { orderId } = await makeOrderID(amount, receiptId);
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY, // Enter your Key ID from Razorpay Dashboard
      amount: amount * 100, // Amount in subunits (e.g. 50000 paise = INR 500)
      currency: "INR",
      name: "Food Planet",
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

  return (
    <div>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Razorpay;
