import React from 'react';
import { useCart } from '../context/CartContext';

function Checkout() {
  const {
    cart,
    changeQuantity,
    totalItems,
    totalPrice
  } = useCart();

  return (
    <div className='checkout-container'>
      
      {/* Αριστερή στήλη - Φόρμα */}
      <div className='checkout-form-column'>
        <h1>Billing & Shipping</h1>
        <form className="checkout-form">
          <h3>First Name *</h3>
          <input type='text' name='firstName' className='formFirstName' required />

          <h3>Last Name *</h3>
          <input type='text' name='lastName' className='formLastName' required />

          <h3>Company Name</h3>
          <input type='text' name='companyName' className='formCompanyName' />

          <h3>Country / Region *</h3>
          <h3>GREECE</h3>

          <h3>Street Address *</h3>
          <input type='text' name='streetAddress' className='formStreetAddress' required />

          <h3>Apartment, suite, unit etc. (optional)</h3>
          <input type='text' name='apartment' className='formApartment' />

          <h3>Town / City *</h3>
          <input type='text' name='city' className='formCity' required />

          <h3>State / Region (optional)</h3>
          <input type='text' name='state' className='formState' defaultValue='Attica' />

          <h3>Postcode / ZIP *</h3>
          <input type='text' name='postcode' className='formPostcode' required />

          <h3>Phone Number *</h3>
          <input type='tel' name='phone' className='formPhone' required />

          <h3>Email Address</h3>
          <input type='email' name='email' className='formEmail' />
        </form>
      </div>

      {/* Δεξιά στήλη - Καλάθι */}
      <div className='checkout-cart-column'>
        <h2>Your Cart</h2>
        {cart.map((item, index) => (
          <div className="checkoutProductInfo" key={index}>
            
            <img src={item.image} alt={item.name} />

            <div className="checkoutCartProductDetails">
              <p>{item.name}</p>
              <strong>{item.price} €</strong>
              
            </div>
          </div>
        ))}

        <div className='checkout-summary'>
          <p>Total Items: {totalItems}</p>
          <h3>Total: {totalPrice.toFixed(2)} €</h3>
          <button className='completeCheckoutButton'>Complete Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
