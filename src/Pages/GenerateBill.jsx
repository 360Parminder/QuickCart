import React, { useState, useEffect } from 'react';
import '../Styles/Global.css';
import { handlePayment } from '../Utils/razorpay';
import { useNavigate } from 'react-router-dom';
import { Payments } from '../Services/Payments';

const GenerateBill = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [customer, setCustomer] = useState({
        name: '',
        mobile: '',
        email: '',
    });
    const [orderId, setOrderId] = useState(null);
    const [paymentMode, setPaymentMode] = useState('cash');
    const [isProcessing, setIsProcessing] = useState(false);

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(cartData);
        const savedOrderId = localStorage.getItem('orderId');
        setOrderId(savedOrderId);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomer((prev) => ({ ...prev, [name]: value }));
    };

    const handlePaymentModeChange = (e) => {
        setPaymentMode(e.target.value);
    };

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidMobile = (mobile) => /^[6-9]\d{9}$/.test(mobile);

    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const handlePay = async () => {
        // if (isProcessing) return;
        setIsProcessing(true);

        if (!customer.name || !customer.mobile) {
            alert('Please fill out customer name and mobile number.');
            setIsProcessing(false);
            return;
        }

        if (!isValidMobile(customer.mobile)) {
            alert('Please enter a valid mobile number.');
            setIsProcessing(false);
            return;
        }

        if (customer.email && !isValidEmail(customer.email)) {
            alert('Please enter a valid email address.');
            setIsProcessing(false);
            return;
        }

        if (paymentMode === 'cash') {
            const response = await Payments.generateBill(cart, orderId, customer, totalAmount, paymentMode, 'Paid');
            if (response.success) {
                alert('Payment successful');
                localStorage.removeItem('cart');
                setCart([]);
                navigate('/Dashboard');
            }
                else {
                    alert('Payment failed. Please try again.');
                }
        
        } else if (paymentMode === 'online') {
            try {
                const response = await handlePayment(totalAmount, orderId, customer.name, customer.mobile, customer.email);
                if (response.success) {
                    alert('Payment successful');
                    localStorage.removeItem('cart');
                    setCart([]);

                    navigate('/Dashboard');
                    setIsProcessing(false);
                } else {
                    alert('Payment failed. Please try again.');
                }
            } catch (error) {
                setIsProcessing(false);
                console.error('Payment error:', error);
                alert('Something went wrong during the payment process.');
            }
        }
        setIsProcessing(false);
    };

    const handleCancel = () => {
        console.log('Payment cancelled');
        setCart([]);
        localStorage.removeItem('cart');
        navigate('/Dashboard');
    };

    return (
        <div className="flex flex-col md:flex-row p-6 w-full h-full bg-[#1c1917] text-white rounded-lg shadow-xl">
            <div className="flex-1 p-4">
                <h2 className="text-2xl font-bold mb-4">Products</h2>
                <table className="w-full border-collapse border border-gray-700">
                    <thead>
                        <tr>
                            <th className="border border-gray-700 px-4 py-2">Name</th>
                            <th className="border border-gray-700 px-4 py-2">Quantity</th>
                            <th className="border border-gray-700 px-4 py-2">Price</th>
                            <th className="border border-gray-700 px-4 py-2">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            <tr key={index}>
                                <td className="border border-gray-700 px-4 py-2">{item.name}</td>
                                <td className="border border-gray-700 px-4 py-2">{item.quantity}</td>
                                <td className="border border-gray-700 px-4 py-2">₹{item.price.toFixed(2)}</td>
                                <td className="border border-gray-700 px-4 py-2">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3" className="border border-gray-700 px-4 py-2 font-bold">
                                Total
                            </td>
                            <td className="border border-gray-700 px-4 py-2 font-bold">
                            ₹{totalAmount.toFixed(2)}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div className="flex-1 p-4">
                <h2 className="text-2xl font-bold mb-4">Customer Details</h2>
                <div className="mb-4">
                    <label className="block mb-2">
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={customer.name}
                            onChange={handleInputChange}
                            className="input"
                            placeholder="Enter customer name"
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block mb-2">
                        Mobile:
                        <input
                            type="text"
                            name="mobile"
                            value={customer.mobile}
                            onChange={handleInputChange}
                            className="input"
                            placeholder="Enter customer mobile number"
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block mb-2">
                        Email (optional):
                        <input
                            type="email"
                            name="email"
                            value={customer.email}
                            onChange={handleInputChange}
                            className="input"
                            placeholder="Enter customer email"
                        />
                    </label>
                </div>
                <h2 className="text-xl font-bold mb-4">Total: ${totalAmount.toFixed(2)}</h2>
                <div className="mb-4">
                    <label className="block mb-2">
                        Payment Mode:
                        <select
                            value={paymentMode}
                            onChange={handlePaymentModeChange}
                            className="input"
                        >
                            <option value="cash">Cash</option>
                            <option value="online">Online</option>
                        </select>
                    </label>
                </div>
                <div className="flex space-x-4">
                    <button
                        onClick={handlePay}
                        disabled={isProcessing}
                        className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${isProcessing && 'opacity-50 cursor-not-allowed'}`}
                    >
                        {isProcessing ? 'Processing...' : 'Pay'}
                    </button>
                    <button
                        onClick={handleCancel}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GenerateBill;
