import React, { useState } from 'react';
import sunscreenProducts from '../data/sunscreenProducts';
import ProductCardComponent from './ProductCardComponent';
import SlideInTitle from './SlideInTitle';
import { useCart } from '../context/CartContext'; // Σύνδεση με το καλάθι Cart
import SideCart from '../components/SideCart';

function Sunscreen() {
  const { cart, addToCart, changeQuantity, totalItems, totalPrice } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    addToCart(product);      //  Προσθήκη προϊόντος στο καλάθι
    setIsCartOpen(true);     //  Άνοιγμα του side cart
  };

  const handleClose = () => setIsCartOpen(false);

  return (
    <>
      <div className="product-title">
        <SlideInTitle><h1>Shielded in Elegance — Voilé Sunscreen</h1></SlideInTitle>
      </div>

      <div className="products-container">
        {sunscreenProducts.map((product, index) => (
          <ProductCardComponent
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
            onAddtoCartClick={() => handleAddToCart(product)} //  Callback για κάθε κάρτα
          />
        ))}
      </div>

      {/*  Side Cart */}
      <SideCart />
    </>
  );
}

export default Sunscreen;
