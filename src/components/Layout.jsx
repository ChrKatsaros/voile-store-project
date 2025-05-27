import React from 'react';
import NavBar from './Navbar';
import Footer from './Footer';
import { Outlet , useLocation } from 'react-router-dom';
import SideCart from './SideCart'; 


function Layout(){

const location = useLocation();

// Έλεγχος αν η τρέχουσα διαδρομή είναι το checkout
  const hideFooter = location.pathname === '/checkout';

  return (
    <div className="app-wrapper"> {/* <-- Ο βασικός wrapper που κρατάει όλο το layout */}
      <NavBar />  {/* <-- Πάντα εμφανίζεται πάνω */}
      
      <main className="content"> {/* <-- Κύριο περιεχόμενο, μεγαλώνει όσο χρειάζεται */}
        <Outlet /> {/* <-- το περιεχόμενο κάθε σελίδας (Main, Femme, Homme...) */}
      </main>
      <SideCart /> {/* <-- Εμφανίζεται παντού μολις πατηθει απο το ναβμπαρ*/}
       {!hideFooter && <Footer />} {/* <-- Πάντα κολλημένο κάτω , δεν εμφανιζεται στο checkout page*/}
    </div>
  );
};

export default Layout;
