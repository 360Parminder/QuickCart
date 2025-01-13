import React, { useEffect, useState } from 'react';
import { Payments } from '../Services/Payments';

const Sales = () => {
    const [payments, setPayments] = useState([]);
    useEffect(() => {
      async function getPayments() {
        const response = await Payments.getPayments();
        if (response.success) {
          setPayments(response.data);
        } else {
          alert(response.message);
        }
      }
        getPayments();
    }, []);
    console.log(payments);
    

    return (
        <div className="w-full h-full rounded-md mx-auto p-4 text-[#ffffff] bg-[#18181b]">
            <h1 className="text-2xl font-bold mb-4">Sales</h1>
            <div className='bg-[#000] rounded-lg   p-4 overflow-x-auto shadow-sm shadow-[#3a3939]'>
            <table className="min-w-full">
                <thead>
                    <tr className='border-b border-[#ffffff]'>
                        <th className="py-2">Receipt ID</th>
                        <th className="py-2">Customer Name</th>
                        <th className="py-2">Amount</th>
                        <th className="py-2">Payment Method</th>
                        <th className="py-2">Status</th>
                        <th className="py-2">Created At</th>
                        <th className="py-2">Items</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map(payment => (
                        <tr className='border-b border-[#ffffff] text-center capitalize' key={payment._id}>
                            <td className=" px-4 py-2">{payment.receiptId}</td>
                            <td className=" px-4 py-2">{payment.customerName}</td>
                            <td className=" px-4 py-2"> ₹{payment.amount}</td>
                            <td className=" px-4 py-2">{payment.paymentMethod}</td>
                            <td className=" px-4 py-2">{payment.status}</td>
                            <td className=" px-4 py-2">{new Date(payment.createdAt).toLocaleString()}</td>
                            <td className=" px-4 py-2">
                                <ul className="list-disc list-inside">
                                    {payment.items.map(item => (
                                        <li className='flex gap-2 flex-row mb-2 text-center' key={item._id}>
                                            <p><strong>Product ID:</strong> {item.productId}</p>
                                            <p><strong>Quantity:</strong> {item.quantity}</p>
                                        </li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default Sales;