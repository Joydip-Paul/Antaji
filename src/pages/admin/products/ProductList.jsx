import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ProductList() {
    const [products, setProducts] = useState([]);
    const baseURL = "http://localhost:3000";
    function getProducts() {
        fetch(baseURL+"/products/?_sort=id&_order=desc")
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error()
            })
            .then(data => {
                setProducts(data);
                console.log(data);
            })
            .catch(error => {
                console.log("Something went wrong!");
            })
    }

    useEffect((
        getProducts
    ), [])
    return (
        <div className='container'>
            <div className="page-header">
                <div className="page-header__left">
                    <h3>Product Management</h3>
                </div>
                <div className="page-header__right">
                    <button className="main-btn"><Link to='/admin/products/create'>Create Product</Link></button>
                    <button className="main-btn" onClick={getProducts}>Refresh</button>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table-one mt-5">
                    <thead>
                        <tr>
                            <th className="s-col">Id</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Brand</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td><span className="res-head">Id:</span>{item.id}</td>
                                        <td><span className="res-head">Name</span>{item.name}</td>
                                        <td><span className="res-head">Image</span><img src={baseURL+"/images/" + item.imageFileName} alt="" /></td>
                                        <td><span className="res-head">Brand</span>{item.brand}</td>
                                        <td><span className="res-head">Category</span>{item.category}</td>
                                        <td><span className="res-head">Price</span>{item.price}$</td>
                                        <td><span className="res-head">Description:</span>
                                            <p className="td-text-cut">{item.description}</p>
                                        </td>
                                        <td className="action">
                                            <button>View</button>
                                            <button><Link to={'/admin/products/edit/' + item.id}>Edit</Link></button>
                                            <button>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductList