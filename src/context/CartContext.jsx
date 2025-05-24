import { createContext, useContext, useState } from 'react';

// Δημιουργούμε ένα "context" που θα μας επιτρέπει να μοιραστούμε δεδομένα του καλαθιού
// με όποιο component το χρειάζεται (χωρίς props)
const CartContext = createContext();

// Αυτό το component "τυλίγει" την εφαρμογή και δίνει πρόσβαση στο καλάθι
export function CartProvider({ children }) {
  // Κρατάμε την κατάσταση του καλαθιού (array με αντικείμενα προϊόντων)
  const [cart, setCart] = useState([]);

  // Κρατάμε και το αν είναι ανοιχτό το καλάθι (για εμφάνιση/απόκρυψη π.χ. sidebar )
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Υπολογίζουμε πόσα αντικείμενα υπάρχουν συνολικά στο καλάθι
  // Χρησιμοποιούμε reduce για να προσθέσουμε όλα τα quantity
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Υπολογίζουμε το συνολικό ποσό όλων των προϊόντων
  // Πολλαπλασιάζουμε την τιμή του κάθε προϊόντος με την ποσότητά του
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Συνάρτηση που προσθέτει ένα προϊόν στο καλάθι
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Ψάχνουμε αν υπάρχει ήδη το προϊόν (βασισμένοι στο όνομα του προϊόντος)
      const found = prevCart.find((item) => item.name === product.name);

      if (found) {
        // Αν υπάρχει ήδη, αυξάνουμε την ποσότητα κατά 1
        return prevCart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // Αν δεν υπάρχει, προσθέτουμε το προϊόν με ποσότητα 1
      return [...prevCart, { ...product, quantity: 1 }];
    });

    // Όταν προσθέτουμε κάτι στο καλάθι, το ανοίγουμε
    setIsCartOpen(true);
  };

  // Συνάρτηση που αλλάζει την ποσότητα ενός προϊόντος (αύξηση ή μείωση)
  const changeQuantity = (productName, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.name === productName
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        // Αφαιρούμε προϊόντα που έχουν ποσότητα 0 ή μικρότερη
        .filter((item) => item.quantity > 0)
    );
  };

  // Συνάρτηση για να "κλείσει" το καλάθι (π.χ. όταν ο χρήστης πατήσει Χ)
  const handleClose = () => setIsCartOpen(false);

  // Εδώ "μοιράζουμε" τα δεδομένα και τις συναρτήσεις στα components που είναι παιδιά του Provider
  return (
    <CartContext.Provider
      value={{
        cart,            // το καλάθι
        setCart,         // η συνάρτηση για άμεση αλλαγή του καλαθιού (χρήσιμη σε κάποιες περιπτώσεις)
        isCartOpen,      // true/false αν είναι ανοιχτό το καλάθι
        setIsCartOpen,   // για να αλλάζουμε την παραπάνω κατάσταση
        totalItems,      // συνολικός αριθμός αντικειμένων
        totalPrice,      // συνολικό ποσό
        addToCart,       // προσθήκη προϊόντος
        changeQuantity,  // αλλαγή ποσότητας
        handleClose      // κλείσιμο καλαθιού
      }}
    >
      {children} {/* Εδώ "μπαίνει" όλη η υπόλοιπη εφαρμογή που τυλίγεται από τον Provider */}
    </CartContext.Provider>
  );
}

// Custom hook για να χρησιμοποιούμε το context πιο απλά
export function useCart() {
  return useContext(CartContext);
}
