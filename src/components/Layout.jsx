import React from 'react';
import NavBar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import SideCart from './SideCart'; 


const Layout = () => {
  return (
    <div className="app-wrapper"> {/* <-- Ο βασικός wrapper που κρατάει όλο το layout */}
      <NavBar />  {/* <-- Πάντα εμφανίζεται πάνω */}
      
      <main className="content"> {/* <-- Κύριο περιεχόμενο, μεγαλώνει όσο χρειάζεται */}
        <Outlet /> {/* <-- το περιεχόμενο κάθε σελίδας (Main, Femme, Homme...) */}
      </main>
      <SideCart /> {/* <-- Εμφανίζεται παντού μολις πατηθει απο το ναβμπαρ*/}
      <Footer /> {/* <-- Πάντα κολλημένο κάτω */}
    </div>
  );
};

export default Layout;
