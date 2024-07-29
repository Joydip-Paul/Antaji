import React from 'react'
import { useNavigate } from 'react-router-dom';

function CreateProduct() {

    const navigate = useNavigate();
    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const product = Object.fromEntries(formData.entries());

        if (!product.name || !product.brand || !product.category || !product.description || !product.price || !product.name) {
            console.log("Enter Something");
        }

        try {
            const response = await fetch("http://localhost:3000/products", {
                method: 'POST',
                body: formData
            })

            const data = await response.json()
            console.log("Data", data);

            if (response.ok) {
                console.log("Product Created");
                navigate("/admin/productList")
            }
            else if (response.status === 400) {
                console.log("Validation Error");
            }
            else {
                console.log("Something went wrong!");
            }
        }

        catch (error) {
            console.log("Server Error");
        }
    }
    return (
        <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Create Product</h2>
            <form onSubmit={handleSubmit}>
                {/* Product Name */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="productName">
                        Product Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter product name"
                    />
                </div>

                {/* Brand Name */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="brand">
                        Brand
                    </label>
                    <input
                        type="text"
                        name="brand"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter brabd name"
                    />
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="brand">
                        Description
                    </label>
                    <input
                        type="text"
                        name="description"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter description"
                    />
                </div>

                {/* Price */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="price">
                        Price
                    </label>
                    <input
                        type="number"
                        name="price"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter price"
                    />
                </div>

                {/* Category */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="category">
                        Category
                    </label>
                    <select
                        name="category"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="">Select a category</option>
                        <option value="electronics">Electronics</option>
                        <option value="fashion">Fashion</option>
                        <option value="home">Home</option>
                        <option value="books">Books</option>
                    </select>
                </div>

                {/* Image Upload */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="imageUpload">
                        Image Upload
                    </label>
                    <input
                        type="file"
                        name="image"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Create Product
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateProduct