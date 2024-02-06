import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'


const state = {
    products: []
}

//     get all products
const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
    const getAllProducts = async() => {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const responseJson = await response.json();
        const Allproducts = await responseJson.results;
        //console.log(responseJson);
        const products = await Allproducts.data.Products;
        setProducts([...products])
        //console.log(products, "this is working")

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

//     render my products

//     sort results

//     add new products

//     update a product

//     delete a product

export default Products
