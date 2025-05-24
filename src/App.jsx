import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './components/Main';
import Femme from './components/Femme';
import Homme from './components/Homme';
import Beaute from './components/Beaute';
import HeaderCategoriesRow from "./components/HeaderCategoriesRow"
import Story from './components/Story';
import Discover from './components/Discover';
import Checkout from './components/Checkout';
import BodyCreams from './components/BodyCreams';
import AromaticCandles from './components/AromaticCandles';
import Sunscreen from './components/Sunscreen';
import MenCare from './components/MenCare';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      {/* Αυτό το component φροντίζει κάθε φορά που αλλάζει η σελίδα να "γυρίζει" το scroll στην κορυφή */}
      <ScrollToTop />

      <Routes>
        {/* 
          Το Layout είναι το βασικό "καλούπι" όλων των σελίδων 
          Περιέχει το NavBar, το Footer και ένα <Outlet /> που θα γεμίζει με το περιεχόμενο κάθε σελίδας
          Ό,τι ορίσεις μέσα σε αυτό το Route, θα εμφανιστεί μέσα στο <Outlet /> του Layout 
        */}
        <Route path="/" element={<Layout />}>  

          {/* 
            Index route → η αρχική σελίδα "/" 
            Αυτό σημαίνει: όταν ο χρήστης πάει στην ακριβή διαδρομή "/", θα φορτώσει αυτό το περιεχόμενο.
            Θα εμφανιστεί μέσα στο <Outlet /> του Layout, δηλαδή στο "μεσαίο" κομμάτι της σελίδας.
          */}
          <Route index element={
            <>
              {/* Εδώ βάζουμε το βασικό περιεχόμενο της αρχικής σελίδας */}
              <Main />
              <HeaderCategoriesRow />
            </>
          } />

          {/* 
            Άλλες διαδρομές (σελίδες), επίσης μπαίνουν στο <Outlet /> του Layout
            Δηλαδή το NavBar και το Footer παραμένουν σταθερά, αλλά αλλάζει το κύριο περιεχόμενο 
          */}
          <Route path="femme" element={<Femme />} />
          <Route path="homme" element={<Homme />} />
          <Route path="beaute" element={<Beaute />} />
          <Route path="body-creams" element={<BodyCreams />} />
          <Route path="aromatic-candles" element={<AromaticCandles />} />
          <Route path="sunscreen" element={<Sunscreen />} />
          <Route path="men-care" element={<MenCare />} />

          {/* 
            Κάθε μία από αυτές τις σελίδες θα αλλάζει μόνο το περιεχόμενο στο <Outlet /> 
            αλλά θα κρατάει σταθερό το NavBar και το Footer που είναι στο Layout 
          */}

           <Route path="story" element={<Story />} />
           <Route path="discover" element={<Discover />} />
           <Route path="checkout" element={<Checkout />} />


        </Route>
      </Routes>
    </>
  );
}

export default App;


/* 

Παράδειγμα ροής όταν ο χρήστης επισκέπτεται την αρχική σελίδα "/":

1. Πάει στο "/"
2. Το React Router φορτώνει το Layout, που περιέχει το NavBar, το Footer, και το <Outlet />
3. Στο <Outlet /> βάζει το index route, δηλαδή το <>
     <Main />
     <HeaderCategoriesRow />
   </>
4. Άρα ο χρήστης βλέπει NavBar πάνω, Footer κάτω, και στο κέντρο το περιεχόμενο της αρχικής σελίδας

Αν πάει σε "/femme":

1. Φορτώνει πάλι το Layout με NavBar και Footer
2. Στο <Outlet /> βάζει το component Femme
3. Εμφανίζει μόνο τα γυναικεία προϊόντα ή ό,τι άλλο περιέχει το Femme component

Έτσι αποφεύγουμε την επαναφόρτωση ολόκληρης της σελίδας και κρατάμε σταθερά στοιχεία όπως το NavBar και το Footer.

*/
