import React from 'react'
import logo from "../images/logo.png"
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {


   const myState = useSelector((state) => state.cardItems.length);
    return (

        <>
            <header className="header">
                <div className="logo"> <Link to="/"><img src={logo} alt="" /></Link></div>
                <h1>All products</h1>
                <Link to="/cart">  <div className="cart-icon"><span>{myState}</span><img src="./cart-icon.png" alt="" /></div> </Link>
            </header>

            <Outlet />
        </>
    )
}

export default Header