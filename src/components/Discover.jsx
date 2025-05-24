import React, { useState } from 'react';
import discoverProducts from '../data/discoverProducts'; 
import ProductCardComponent from './ProductCardComponent';
import SlideInTitle from './SlideInTitle';
import { useCart } from '../context/CartContext'; 
import SideCart from '../components/SideCart';



function Discover() {
//  Παίρνουμε τις συναρτήσεις του cart
  const { cart, addToCart, changeQuantity, totalItems, totalPrice } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    addToCart(product);     //  Χρήση της σωστής συνάρτησης
    setIsCartOpen(true);
  };

  const handleClose = () => setIsCartOpen(false);
  return (
    <>
      {/*  Τίτλος με animation */}
      <div className="product-title">
        <SlideInTitle>
          <h1>Discover All Our Products</h1>
        </SlideInTitle>
      </div>

      {/*  Εμφάνιση όλων των προϊόντων */}
      <div className="products-container">
        {discoverProducts.map((product, index) => (
          <ProductCardComponent
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
            onAddtoCartClick={() => handleAddToCart(product)} //  Σωστό callback
          />
        ))}
      </div>

      {/*  Side Cart — Εμφανίζεται όταν είναι ανοιχτό */}
     <SideCart />
    </>
  );
}

export default Discover;
