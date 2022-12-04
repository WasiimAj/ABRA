import React from 'react'
import emptyCart from "../../Images/empty-cart.png";
import './Cart.css';

const Cart = () => {
    return (
        <>
        {/* Empty Cart Section Start Here .. */}
        <div className="empty-cart">
            <img 
                src={emptyCart} 
                alt="empty-cart-img" 
            />
            <p>your cart is empty !</p>
        </div>
        {/* Empty Cart Section End Here .. */}

        {/* Cart PopUP Section Start Here .. */}
        </>
    )
}

export default Cart