import React from 'react';                      
import { Link } from 'react-router-dom';        

// Το component δέχεται την συνάρτηση onClose ως prop
function DropdownMenu({ onClose }) {
  return (
    <div className="dropdown-menu">             {/* Εξωτερικό container του dropdown */}
      {/* Κουμπί "X" για να κλείνει το dropdown */}
      <button className="close-button" onClick={onClose}>x</button>

      {/* Links – Όλα κλείνουν το dropdown όταν πατηθούν */}
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
