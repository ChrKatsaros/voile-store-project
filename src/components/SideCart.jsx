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
    isCartOpen,
    setIsCartOpen // <-- ΠΡΟΣΟΧΗ: το βάζουμε εδώ ώστε να μπορεί να χρησιμοποιηθεί στο 'Start Shopping'
  } = useCart();

  const location = useLocation(); // Παίρνει το path της τρέχουσας σελίδας


  // === Έτσι μπορούμε να κάνουμε CSS animation για smooth εμφάνιση ===
  return (
    <div className={`sideCartContainer ${isCartOpen ? 'open' : ''}`}> {/* <-- ΠΡΟΣΘΗΚΗ class "open" με βάση την κατάσταση */}

      {/* === HEADER ΤΟΥ ΚΑΛΑΘΙΟΥ === */}
      <div className="sideCartHeader">
        <p className="cartCloseButton" onClick={handleClose}>X</p>
        <h2 className="sideCartTitle">Your Cart ({totalItems} items)</h2>
      </div>

      {/* === ΑΔΕΙΟ ΚΑΛΑΘΙ === */}
      {cart.length === 0 ? (
        <Link to="/discover" className='emptyCartContainer'>
          <h3 className='emptyCart'>Your Cart is Empty</h3>
          <h1 className='startShopping' onClick={() => setIsCartOpen(false)}>Start Shopping</h1>
        </Link>
      ) : (
        /* === ΓΕΜΑΤΟ ΚΑΛΑΘΙ === */
        cart.map((item, index) => (
          <div className="sideCartProductInfo" key={index}>
            <button className='removeFromCart' onClick={() => changeQuantity(item.name, -10000)}>remove</button>
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

      {/* === FOOTER ΤΟΥ ΚΑΛΑΘΙΟΥ === */}
      <div className="sideCartFooter">
        <div className="totalPrice">
          <h2>{cart.length > 0 && `Total ${totalPrice.toFixed(2)} €`}</h2>
        </div>

        {cart.length > 0 ? (
          <>
            <Link to="/checkout" onClick={handleClose}>
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
