import React, { useState } from 'react';
import { Product } from '../Services/Product';



const AddDeleteProducts = () => {
    const [product, setProduct] = useState({
        name: '',
        price: '',
        quantity: '',
        unit: '',
        shopId: '',
        image: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setProduct({
            ...product,
            image: e.target.files[0]
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
       const response = await Product.addProduct(product);
        console.log(response);
        //  if(response.success) {
        //     alert(response.message);
        //       console.log(response.message);
        //  } else {
        //       console.log(response.message);
        //     }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Add Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Name:</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={product.name} 
                        onChange={handleChange} 
                        required 
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Price:</label>
                    <input 
                        type="number" 
                        name="price" 
                        value={product.price} 
                        onChange={handleChange} 
                        required 
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Quantity:</label>
                    <input 
                        type="number" 
                        name="quantity" 
                        value={product.quantity} 
                        onChange={handleChange} 
                        required 
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Unit:</label>
                    <input 
                        type="text" 
                        name="unit" 
                        value={product.unit} 
                        onChange={handleChange} 
                        required 
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Shop ID:</label>
                    <input 
                        type="text" 
                        name="shopId" 
                        value={product.shopId} 
                        onChange={handleChange} 
                        required 
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Image:</label>
                    <input 
                        type="file" 
                        name="image" 
                        onChange={handleFileChange} 
                        required 
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                >
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddDeleteProducts;