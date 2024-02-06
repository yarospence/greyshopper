import React from 'react'
import ReactDOM from 'react-dom/client'
import Products from './db/Products'
import Navbar from './navbar/navbar'


const App = () => {
  return (
    <>
      <h1>Greyshopper</h1>

      <Products />
      <Navbar />
    </>
  )
}

export default App
