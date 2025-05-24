// === SideCart.jsx ===
import React from 'react';
import { useCart } from '../context/CartContext';
import { Link, useLocation } from 'react-router-dom';




function SideCart() {
  const {
    cart,
    changeQuantity,
    handleClose,
    totalItems,
    totalPrice,
    isCartOpen
  } = useCart();

  const location = useLocation(); // Παίρνει το path της τρέχουσας σελίδας
   const { setIsCartOpen } = useCart()
  if (!isCartOpen) return null; // Αν το καλάθι δεν είναι ανοιχτό, μην εμφανίζεις τίποτα

  return (
    <div className="sideCartContainer">
      <div className="sideCartHeader">
        <p className="cartCloseButton" onClick={handleClose}>X</p>
        <h2 className="sideCartTitle">Your Cart ({totalItems} items)</h2>
      </div>

      {cart.length === 0 ? (
     <Link to="/discover"  className='emptyCartContainer'> 
       <h3 className='emptyCart'>Your Cart is Empty</h3>
        <h1 className='startShopping' onClick={() => setIsCartOpen(false)}>Start Shopping</h1>
    </Link>
      ) : (
        cart.map((item, index) => (
          <div className="sideCartProductInfo" key={index}>
            <button className='removeFromCart' onClick={() => changeQuantity(item.name, -10000)} >remove</button>
            <img src={item.image} alt={item.name} />
            
            <div className="sideCartProductDetails">
              <p>{item.name}</p>
              <strong>{item.price} €</strong>
              <div className="quantity">
                <button onClick={() => changeQuantity(item.name, -1)}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => changeQuantity(item.name, 1)}>+</button>
                
              </div>
            </div>
          </div>
        ))
      )}

      <div className="sideCartFooter">
        <div className="totalPrice">
          <h2>{cart.length > 0 && `Total ${totalPrice.toFixed(2)} €`}</h2>
        </div>
       {cart.length > 0 ? (
              <>
              <Link to="/checkout"  onClick={handleClose} >
               <h3>Proceed to Checkout</h3>
              </Link>
               <Link to={location.pathname} onClick={handleClose}>
                    Keep Shopping
               </Link>
             </>
            ) : (
                    ""
          )}

       
        
      </div>
    </div>
  );
}

export default SideCart;
