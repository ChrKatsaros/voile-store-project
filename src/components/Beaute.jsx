import React, { useState } from 'react';
import beauteProducts from '../data/beauteProducts';
import ProductCardComponent from './ProductCardComponent';
import SlideInTitle from './SlideInTitle';
import { useCart } from '../context/CartContext'; //  Χρήση του context Cart
import SideCart from '../components/SideCart';


function Beaute() {
  const { cart, addToCart, changeQuantity, totalItems, totalPrice } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    addToCart(product);     //  Χρήση global συνάρτησης από context
    setIsCartOpen(true);    //  Άνοιγμα καλαθιού
  };

  const handleClose = () => setIsCartOpen(false);

  return (
    <>
      <div className="product-title">
        <SlideInTitle><h1>Embrace the Radiance of Beauté</h1></SlideInTitle>
      </div>

      <div className="products-container">
        {beauteProducts.map((product, index) => (
          <ProductCardComponent
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
            onAddtoCartClick={() => handleAddToCart(product)} //  Callback στο component
          />
        ))}
      </div>

      {/*  Side Cart */}
         <SideCart />
    </>
  );
}

export default Beaute;
