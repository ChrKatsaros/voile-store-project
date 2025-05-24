import React, { useState } from 'react';
import bodyCreamsProducts from '../data/bodyCreamsProducts';
import ProductCardComponent from './ProductCardComponent';
import SlideInTitle from './SlideInTitle';
import { useCart } from '../context/CartContext'; //  Χρήση του context
import SideCart from '../components/SideCart';

function BodyCreams() {
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
        <SlideInTitle><h1>Voilé Body Rituals — Nourish with Elegance</h1></SlideInTitle>
      </div>

      <div className="products-container">
        {bodyCreamsProducts.map((product, index) => (
          <ProductCardComponent
            key={index}
            id={index}
            image={product.image}
            name={product.name}
            price={product.price}
            onAddtoCartClick={() => handleAddToCart(product)} // Callback για Add to Cart
          />
        ))}
      </div>

      {/* Side Cart */}
    <SideCart />
    </>
  );
}

export default BodyCreams;
