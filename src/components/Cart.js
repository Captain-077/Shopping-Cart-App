import React, { useEffect, useState } from 'react'
import item from './images/galaxy s24 Ultra.jpg';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { getProductsAPI } from "./Home";

function Cart() {


  const myItems = useSelector((state) => state.cardItems);
  console.log(myItems)


  const totalPrice = () => {
  return  myItems.reduce((acc, crrVal) => {
      // console.log("crr value", crrVal.cartData.price)
      return acc + crrVal.cartData.price;

    }, 0)

  }
  

  const click = () => console.log("Total Price Cart", totalPrice());



  return (
    <>
      <section className="cart-container">

        <div className='cart-page'>

          {myItems.map((items) => {
            return <div className='cart-item' key={items.cartData.id}>
              <img src={items.cartData.img} alt="" />
              <div className="cart-content-box">
                <h3 className='title'>{items.cartData.title}</h3>
                <p className="decs">{items.cartData.description}</p>
                <span className="price">{items.cartData.price}₹</span>
              </div>
              <div className="quantity-box">
                <button className="minus">-</button>
                <div className="item-quantity">{items.cartData.amount}</div>
                <button className="Plus">+</button>
              </div>
              <div className="remove"><button className="remove-button">Remove</button></div>
            </div>



          })}

        </div>


        <div className="price-container">
          <h2>Summary</h2>
          <div className="quantity">
            <p>Total Quantity</p>
            <span>{myItems.length}</span>
          </div>

          <div className="Price">
            <p>Total Amount</p>
            <span></span>
          </div>
          <button className="checkout" onClick={click}>Checkout</button>

        </div>

      </section>
    </>


  )

}

export default Cart