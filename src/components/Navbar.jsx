// === NavBar.jsx ===
import React, { useState } from 'react';                  
import { Link } from 'react-router-dom';                   
import logo from '../assets/logo.png';                    
import DropdownMenu from './DropDownMenu'; 
import { useCart } from '../context/CartContext'; //  Χρήση του context    

function NavBar() {
  // Δημιουργούμε μια μεταβλητή κατάστασης για να ελέγχουμε αν το dropdown είναι ανοιχτό ή όχι
  const [isOpen, setIsOpen] = useState(false);

  
   // Παίρνουμε τα δεδομένα του καλαθιού από το context
  const { totalItems, setIsCartOpen } = useCart();
  

  // Αυτό το function αναστρέφει την τρέχουσα κατάσταση:
  // Αν είναι false (δηλ. κλειστό), το ανοίγει (true) και αντίστροφα.
  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  // Αυτό το function **κλείνει το dropdown**, θέτοντας το isOpen σε false
  function closeDropdown() {
    setIsOpen(false);
  }

  // Το JSX που επιστρέφει το component
  return (
    <nav className="navbar">  {/* Κύριο container για το navigation bar */}  

      {/* === ΚΟΥΜΠΙ ☰ (hamburger) που ανοίγει/κλείνει το dropdown === */}
      <div className="dropdown-wrapper">
        <button onClick={toggleDropdown} className="hamburger-button">
          ☰
        </button>
      </div>

      {/* === ΛΟΓΟΤΥΠΟ στο κέντρο της navbar === */}
      <div className="nav-logo logo">
        <Link to="/" className="logo">
          <img src={logo} alt="Voile Logo" draggable="false" />
        </Link>
      </div>

      {/* === ΣΤΑΘΕΡΑ ΚΕΝΤΡΙΚΑ LINKS (π.χ. Story, Discover) === */}
      <ul className="nav-links">
        <li><Link to="/story">Story</Link></li>
        <li><Link to="/discover">Discover</Link></li>
        <li>
        <Link
          onClick={() => setIsCartOpen(true)}
         className="cart-button"  
         >
             {totalItems > 0 ? `Cart (${totalItems})` : "Cart"}

         </Link>
         </li>


      </ul>

      {/* === DROPDOWN MENU (εμφανίζεται μόνο όταν είναι true το isOpen) === */}
      {isOpen && <DropdownMenu onClose={closeDropdown} />}
    </nav>
  );
}


export default NavBar;
