import React, { useState } from 'react';
import menCareProducts from '../data/menCareProducts';
import ProductCardComponent from './ProductCardComponent';
import SlideInTitle from './SlideInTitle';
import { useCart } from '../context/CartContext'; //  Χρήση του context
import SideCart from '../components/SideCart';



function MenCare() {
  const { cart, addToCart, changeQuantity, totalItems, totalPrice } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    addToCart(product);      //  Προσθήκη στο καλάθι
    setIsCartOpen(true);     //  Άνοιγμα cart
  };

  const handleClose = () => setIsCartOpen(false);

  return (
    <>
      <div className="product-title">
        <SlideInTitle><h1>Men’s Essentials by Voilé</h1></SlideInTitle>
      </div>

      <div className="products-container">
        {menCareProducts.map((product, index) => (
          <ProductCardComponent
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
            onAddtoCartClick={() => handleAddToCart(product)} //  Callback
          />
        ))}
      </div>

      {/*  Side Cart */}
        <SideCart />
    </>
  );
}

export default MenCare;
