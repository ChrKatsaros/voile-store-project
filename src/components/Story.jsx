import React from 'react';
import { motion } from 'framer-motion';  // Εισάγουμε το Framer Motion για animation
import header1 from '../assets/Marble-Story.webp';
import header2 from '../assets/Marble-Story2.webp';

function Story() {
  return (
    <section className="story-container">

      {/* Τίτλος με ελαφρύ zoom-in και fade-in */}
      <motion.h1
        className="title"
        initial={{ opacity: 0, scale: 0.95 }}  // Αρχικά αόρατο & λίγο μικρότερο
        animate={{ opacity: 1, scale: 1 }}     // Μετά εμφανίζεται & επανέρχεται σε κανονικό μέγεθος
        transition={{ duration: 1 }}           // Διάρκεια animation 1 δευτερόλεπτο
      >
        Our Story
      </motion.h1>

      {/* Κείμενο 1 που κάνει slide από αριστερά με fade-in όταν μπαίνει στο viewport */}
      <motion.p
        className="text1"
        initial={{ x: -100, opacity: 0 }}      // Αρχικά εκτός οθόνης αριστερά & αόρατο
        whileInView={{ x: 0, opacity: 0.78 }}    // Όταν φαίνεται, μετακινείται στη θέση του & γίνεται ορατό
        transition={{ duration: 1 }}           // Διάρκεια 1 δευτερολέπτου
        viewport={{ once: true }}              // Τρέχει μόνο την πρώτη φορά που μπαίνει στο viewport
      >
        At Voile, elegance is not just a word—it is an experience carefully woven into every scent we create. Crafted with passion, inspired by timeless luxury, our fragrances tell stories of sophistication, beauty, and unforgettable moments that linger in your memory.
      </motion.p>

      {/* Εικόνα 1 που κάνει slide από δεξιά με fade-in */}
      <motion.img
        className="image1"
        src={header1}
        alt="Luxury Perfume Bottle 1"
        initial={{ x: 100, opacity: 0 }}      // Αρχικά εκτός οθόνης δεξιά & αόρατη
        whileInView={{ x: 0, opacity: 1 }}    // Όταν εμφανίζεται, μπαίνει στη θέση της & γίνεται ορατή
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />

      {/* Εικόνα 2 που κάνει slide από αριστερά με fade-in */}
      <motion.img
        className="image2"
        src={header2}
        alt="Luxury Perfume Bottle 2"
        initial={{ x: -100, opacity: 0 }}     // Αρχικά εκτός οθόνης αριστερά & αόρατη
        whileInView={{ x: 0, opacity: 1 }}    // Όταν εμφανίζεται, μπαίνει στη θέση της & γίνεται ορατή
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />

      {/* Κείμενο 2 που κάνει slide από δεξιά με fade-in */}
      <motion.p
        className="text2"
        initial={{ x: 100, opacity: 0 }}      // Αρχικά εκτός οθόνης δεξιά & αόρατο
        whileInView={{ x: 0, opacity: 0.78 }}    // Όταν εμφανίζεται, μπαίνει στη θέση του & γίνεται ορατό
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Each bottle encapsulates a journey — an artful blend of nature’s finest essences and masterful craftsmanship. At Voile, we invite you to discover the subtle harmony between tradition and innovation, and to experience the allure of perfumery elevated to its finest form.
      </motion.p>

      {/* Τελικό κείμενο που κάνει fade-in και ανεβαίνει λίγο από κάτω προς τα πάνω */}
      <motion.p
        className="text3"
        initial={{ y: 50, opacity: 0 }}       // Αρχικά κάτω από τη θέση του & αόρατο
        whileInView={{ y: 0, opacity: 0.68 }}    // Όταν εμφανίζεται, ανεβαίνει στην κανονική του θέση & γίνεται ορατό
        transition={{ duration: 1.2, delay: 0.2 }} // Διάρκεια 1.2s με καθυστέρηση 0.2s για πιο smooth effect
        viewport={{ once: true }}
      >
        Follow us on our journey through scent and soul — and uncover the timeless elegance that defines Voile.
      </motion.p>

    </section>
  );
}

export default Story;
