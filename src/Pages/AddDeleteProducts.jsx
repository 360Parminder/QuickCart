import React, { useState } from 'react';
import { Product } from '../Services/Product';
import '../Styles/Global.css';

const AddDeleteProducts = () => {
    const [product, setProduct] = useState({
        name: '',
        price: '',
        quantity: '',
        unit: '', // Unit will be selected from dropdown
        image: null,
        quantityInStock: ''
    });
    const [previewImage, setPreviewImage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setProduct({
            ...product,
            image: file
        });
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('price', product.price);
        formData.append('quantity', product.quantity);
        formData.append('unit', product.unit);
        formData.append('quantityInStock', product.quantityInStock);
        formData.append('image', product.image);

        const response = await Product.addProduct(formData);
        if (response.success) {
            alert(response.message);
            // Clear form fields
            setProduct({
                name: '',
                price: '',
                quantity: '',
                unit: '',
                image: null,
                quantityInStock: ''
            });
            setPreviewImage(null);
        }
        // Handle response logic
    };

    return (
        <div className="w-full md:w-5/6 h-[90%] bg-[#1c1917] rounded-md p-10 overflow-y-scroll overflow-hidden scrollbar text-[#fff]">
            <h2 className="text-2xl font-bold mb-6">Add Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="label">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                        className="input"
                        placeholder='Enter product name'
                    />
                </div>
                <div className="mb-4">
                    <label className="label">Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                        className="input"
                        placeholder='Enter product price'
                    />
                </div>
                <div className="mb-4">
                    <label className="label">Quantity:</label>
                    <input
                        type="number"
                        name="quantity"
                        value={product.quantity}
                        onChange={handleChange}
                        required
                        className="input"
                        placeholder='Enter product quantity'
                    />
                </div>
                <div className="mb-4">
                    <label className="label">Unit:</label>
                    <select
                        name="unit"
                        value={product.unit}
                        onChange={handleChange}
                        required
                        className="input"
                        placeholder='Select unit'
                    >
                        <option value="" disabled>Select unit</option>
                        <option value="kg">Kilogram (kg)</option>
                        <option value="g">Gram (g)</option>
                        <option value="ltr">Liter (ltr)</option>
                        <option value="ml">Milliliter (ml)</option>
                        <option value="pcs">Pieces (pcs)</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="label">Quantity in Stock:</label>
                    <input
                        type="number"
                        name="quantityInStock"
                        value={product.quantityInStock}
                        onChange={handleChange}
                        required
                        className="input"
                        placeholder='Enter quantity in stock'
                    />
                </div>
                <div className="mb-4">
                    <label className="label">Image:</label>
                    <input
                        type="file"
                        name="image"
                        onChange={handleFileChange}
                        required
                        className="input"
                        placeholder='Select product image'
                    />
                </div>
                {previewImage && (
                    <div className="mb-4">
                        <img
                            src={previewImage}
                            alt="Product Preview"
                            className="w-full h-40 object-cover rounded-lg"
                        />
                    </div>
                )}
                <button
                    type="submit"
                    className="w-full primary-button"
                >
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddDeleteProducts;
