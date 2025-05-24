// Χρησιμοποιούμε το useEffect για να εκτελέσουμε κάτι όταν αλλάξει το URL (pathname)
import { useEffect } from 'react';

// Το useLocation μας δίνει πληροφορίες για το τρέχον URL (pathname, search, κλπ)
import { useLocation } from 'react-router-dom';

// Αυτό το component θα εκτελεί scroll στην κορυφή της σελίδας κάθε φορά που αλλάζει το route
function ScrollToTop() {
  // Παίρνουμε το pathname (π.χ. "/", "/femme", "/beaute") από τη διεύθυνση του browser
  const { pathname } = useLocation();

  // Κάθε φορά που το pathname αλλάζει (δηλαδή πάμε σε άλλη σελίδα), τρέχει αυτό το effect
  useEffect(() => {
    // Κάνουμε scroll στην κορυφή του παραθύρου (top: 0, left: 0)
    // Το behavior: "auto" σημαίνει χωρίς animation (άμεσο scroll)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto' 
    });
  }, [pathname]); // Το effect επανεκτελείται μόνο όταν αλλάξει το pathname

  // Το component δεν εμφανίζει τίποτα στο UI, απλώς εκτελεί το effect
  return null;
}

export default ScrollToTop;
