import React, { useState } from 'react';
import hommeProducts from '../data/hommeProducts';
import ProductCardComponent from './ProductCardComponent';
import SlideInTitle from './SlideInTitle';
import { useCart } from '../context/CartContext'; 
import SideCart from '../components/SideCart';

function Homme() {
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
      <div className="product-title">
        <SlideInTitle>
          <h1>Discover the Essence of Homme Elegance</h1>
        </SlideInTitle>
      </div>

      <div className="products-container">
        {hommeProducts.map((product, index) => (
          <ProductCardComponent
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
            onAddtoCartClick={() => handleAddToCart(product)}
          />
        ))}
      </div>

      {/*  Side Cart */}
      <SideCart />
    </>
  );
}

export default Homme;
