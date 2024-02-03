import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'

//     get all products
const Products = () => {
    useEffect(() => {
    const getAllProducts = async() => {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const responseJson = await response.json();
        const Allproducts = responseJson.results;
        console.log(responseJson);
    }
    getAllProducts();
   })

    return (
        <h1>Our Products</h1>
    )
}

//     get a single product
//     get all catergories
//     get in category

//     limit results

//     sort results

//     add new products

//     update a product

//     delete a product

export default Products
