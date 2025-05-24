import React from 'react';
import headerProducts1 from "../assets/headerProductsIMG1.webp";
import headerProducts2 from "../assets/headerProductsIMG2.webp";
import headerProducts3 from "../assets/headerProductsIMG3.webp";
import headerProducts4 from "../assets/headerProductsIMG4.webp";
import { Link } from 'react-router-dom';

function HeaderCategoriesRow() {
  return (
    <div className='headerProductsRow'>
      
      <Link to="body-creams" className="productBox">
        <img src={headerProducts1} alt="Product 1" />
        <p className="productText">Silken Hydration</p>
      </Link>

      <Link to="aromatic-candles" className="productBox">
        <img src={headerProducts2} alt="Product 2" />
        <p className="productText">Aromatic Glow</p>
      </ Link>

      <Link to="sunscreen" className="productBox">
        <img src={headerProducts3} alt="Product 3" />
        <p className="productText">Solar Veil</p>
      </Link>
      <Link to="men-care" className="productBox">
        <img src={headerProducts4} alt="Product 4" />
        <p className="productText">Him, Refined</p>
      </Link>
    </div>
  );
}

export default HeaderCategoriesRow;
