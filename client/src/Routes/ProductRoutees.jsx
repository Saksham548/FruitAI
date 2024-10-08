import React from 'react'
import Home from '../components/Homepage.jsx'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login.jsx'
import About from '../components/About.jsx'
import FaQ from '../components/Faqs.jsx'


const ProductRoutees = ({ setSerch, serch }) => {
    return (

        <Routes>
            <Route path='/' element={<Login />} />
            <Route path="/homepage" element={<Home />} />
            <Route path="/faq" element={<FaQ />} />
            <Route path="/about" element={<About />} />
        </Routes>

    )
}

export default ProductRoutees