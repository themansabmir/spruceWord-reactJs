import React from 'react'
import {  Routes, Route } from 'react-router-dom'
import Home from '../Home/Home.js'
import Shop from '../Shop/Shop'
import Contact from '../Contact/Contact.js'
import About from '../About/About.js'
import Register from '../Auth/Register.js'
import Cart from '../Cart/Cart.js'
import DetailProduct from '../ProductItem/DetailProduct.js'
import Login from '../Auth/Login.js'
 


const Pages = () => {
    return (


        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/detailproduct/:id' element={<DetailProduct />} />

            <Route path='/products' element={<Shop />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/About' element={<About />} />
            <Route path='/Sign' element={<Login />} />
            <Route path='/Cart' element={<Cart />} /> 

        </Routes>




    )
}

export default Pages