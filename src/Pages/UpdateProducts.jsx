import { use, useEffect } from "react";
import { useState } from "react";
import { Product } from "../Services/Product";


const UpdateProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await Product.allProducts();
          setProducts(response.data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
      fetchProducts();
    }, []);
    return (
        <div className="w-full h-full bg-[#2c076e] border border-[#5a12c5] p-8 rounded-lg shadow-lg text-[#fff] ">
            <p className="text-3xl font-semibold w-full my-5">Products</p>
            <div className="w-full overflow-x-auto">
                <table className="table-auto w-full text-left text-white">
                    <thead>
                        <tr className="border-b border-[#5a12c5]">
                            <th className="px-4 py-2">Image</th>
                            <th className="px-4 py-2">Product ID</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Category</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Stock</th>
                            <th className="px-4 py-2">Quantity in Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product._id} className="border-b border-[#5a12c5]">
                                <td className="px-4 py-2">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-12 h-12 rounded-full"
                                    />
                                </td>
                                <td className="px-4 py-2 capitalize">{product.productId}</td>
                                <td className="px-4 py-2 capitalize">{product.name}</td>
                                <td className="px-4 py-2 capitalize">{product.category}</td>
                                <td className="px-4 py-2 capitalize">{product.price}</td>
                                <td className="px-4 py-2 capitalize">{product.stock}</td>
                                <td className="px-4 py-2 capitalize">{product.quantityInStock}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UpdateProducts;