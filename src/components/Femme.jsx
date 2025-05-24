import React, { useState } from 'react';
import femmeProducts from '../data/femmeProducts';
import ProductCardComponent from './ProductCardComponent';
import SlideInTitle from './SlideInTitle';
import { useCart } from '../context/CartContext'; //  Χρήση του context Cart
import SideCart from '../components/SideCart';


function Femme() {
  const { cart, addToCart, changeQuantity, totalItems, totalPrice } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    addToCart(product);     //  Χρήση global συνάρτησης από context
    setIsCartOpen(true);    //  Άνοιγμα καλαθιού
  };

  const handleClose = () => setIsCartOpen(false);

  return (
    <>
      {/*  Τίτλος με animation */}
      <div className="product-title">
        <SlideInTitle>
          <h1>Unveil the Luxury of Femme</h1>
        </SlideInTitle>
      </div>

      {/*  Κάρτες προϊόντων */}
      <div className="products-container">
        {femmeProducts.map((product, index) => (
         <ProductCardComponent
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
            onAddtoCartClick={() => handleAddToCart(product)} //  Σωστό callback
          />
        ))}
      </div>

      {/*  Side Cart */}
       <SideCart />
    </>
  );
}

export default Femme;
