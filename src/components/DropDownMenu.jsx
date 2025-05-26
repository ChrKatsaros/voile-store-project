import React from 'react';
import { Link } from 'react-router-dom';

// Δέχεται prop `isOpen` για smooth εμφάνιση
function DropdownMenu({ isOpen, onClose }) {
  return (
    <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={onClose}>✕</button>
      <Link to="femme" onClick={onClose}>PERFUMES FOR HER</Link>
      <Link to="homme" onClick={onClose}>PERFUMES FOR HIM</Link>
      <Link to="beaute" onClick={onClose}>BEAUTY ESSENTIALS</Link>
      <Link to="body-creams" onClick={onClose}>BODY CREAMS</Link>
      <Link to="aromatic-candles" onClick={onClose}>AROMATIC CANDLES</Link>
      <Link to="sunscreen" onClick={onClose}>SUNSCREENS</Link>
      <Link to="men-care" onClick={onClose}>MENS CARE</Link>
    </div>
  );
}

export default DropdownMenu;
