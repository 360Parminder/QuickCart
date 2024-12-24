import React, { useState, useEffect } from "react";
import { Product } from "../Services/Product";
import { useNavigate } from "react-router-dom";
import { generateReceiptId } from "../Utils/generateReceiptId";
import { handlePayment } from "../Utils/razorpay";

const ProductPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [orderId, setOrderId] = useState(null);


 

  // Fetch products on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await Product.allProducts("8267549");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Load cart and orderId from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);

    // Set existing or generate a new orderId
    const savedOrderId = localStorage.getItem("orderId");
    if (savedCart.length > 0 && savedOrderId) {
      setOrderId(savedOrderId);
    } else {
      const newOrderId = generateReceiptId();
      setOrderId(newOrderId);
      localStorage.setItem("orderId", newOrderId);
    }
  }, []);

  // Save cart and orderId to localStorage whenever cart updates
  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    if (updatedCart.length === 0) {
      const newOrderId = generateReceiptId();
      setOrderId(newOrderId);
      localStorage.setItem("orderId", newOrderId);
    }
  };

  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.name === product.name);
    let updatedCart;
    if (existingProduct) {
      updatedCart = cart.map((item) =>
        item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }
    updateCart(updatedCart);
  };

  const handleRemoveFromCart = (product) => {
    const updatedCart = cart
      .map((item) =>
        item.name === product.name ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    updateCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]); // Clear cart in state
    localStorage.removeItem("cart"); // Remove cart from localStorage
    localStorage.removeItem("orderId"); // Remove orderId from localStorage
  };

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(price);

  return (
    <div className="bg-black text-white h-full flex flex-row justify-between gap-4">
      {/* Products Section */}
      <div className={`${cart.length > 0 ? "grid-cols-1 w-4/6" : "grid-cols-2 w-full"} grid grid-cols-1 gap-6 h-full overflow-scroll scrollbar-hidden`}>
        {products.map((product, index) => (
          <div
            key={index}
            onClick={() => handleAddToCart(product)}
            className="flex flex-row items-center justify-between border border-purple-600 rounded-lg p-4 bg-purple-900 text-center cursor-pointer hover:bg-purple-700"
          >
            <img
              src={product.image}
              alt={`Image of ${product.name}`}
              className="rounded-md w-32 h-32 object-cover mb-4"
            />
            <div>
              <p>Product Name</p>
              <h3 className="text-lg font-medium">{product.name}</h3>
            </div>
            <div>
              <p>Inventory</p>
              <p>{product?.quantityInStock} in Stock</p>
            </div>
            <div>
              <p>{product?.quantity} {product?.unit}</p>
              <h3 className="text-gray-300 text-lg font-medium">{formatPrice(product.price)}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      {cart.length > 0 && (
        <div className="w-2/5 bg-purple-900 py-4 rounded-lg relative border-purple-600 border">
          <div className="mb-4 flex justify-between px-4">
            <div>
              <p>Order Id:</p>
              <p>{orderId}</p>
            </div>
            <p>Customer: Walk-in</p>
            <p>{new Date().toLocaleDateString()}</p>
          </div>
          <div className="mt-4 flex flex-col items-center">
            <table className="w-full text-center">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product, index) => (
                  <tr key={index} className="border-b border-gray-600">
                    <td>{product.name}</td>
                    <td>{product.quantity}</td>
                    <td>{formatPrice(product.price * product.quantity)}</td>
                    <td>
                      <button
                        onClick={() => handleRemoveFromCart(product)}
                        className="rounded-md px-4 py-1 bg-red-500 text-white mx-1"
                      >
                        -
                      </button>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="rounded-md px-4 py-1 bg-green-500 text-white mx-1"
                      >
                        +
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="absolute bottom-1 px-4 pt-2 border-t border-purple-600 w-full bg-purple-900">
            <div className="flex justify-between">
              <p>Total:</p>
              <p>{formatPrice(cart.reduce((acc, item) => acc + item.price * item.quantity, 0))}</p>
            </div>
            <div className="flex justify-between">
              <p>Tax:</p>
              <p>{formatPrice(cart.reduce((acc, item) => acc + item.price * item.quantity, 0) * 0.06)}</p>
            </div>
            <div className="flex justify-between">
              <p>Discount:</p>
              <p>-{formatPrice(cart.reduce((acc, item) => acc + item.price * item.quantity, 0) * 0.04)}</p>
            </div>
            <div className="flex justify-between">
              <p>Grand Total:</p>
              <p>{formatPrice(
                cart.reduce((acc, item) => acc + item.price * item.quantity, 0) * 1.02 // Adjusted for tax and discount
              )}</p>
            </div>
            <div className="flex justify-between py-2">
              <button
                onClick={clearCart}
                className="rounded-md px-4 py-2 bg-red-500 text-white hover:bg-red-600 transition duration-300"
              >
                Cancel
              </button>
              <button onClick={() => handlePayment(100,orderId,8779112732,"parminder")} className="rounded-md px-4 py-2 bg-green-500 text-white hover:bg-green-600 transition duration-300">
                Pay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
