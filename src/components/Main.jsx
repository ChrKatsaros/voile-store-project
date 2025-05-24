import React from 'react';
import { Link } from 'react-router-dom'; 
import header1 from '../assets/Header-Femme.webp';
import header2 from '../assets/Header-Homme.webp';
import header3 from '../assets/Header-Beaute.webp';

function Main() {
  return (
    <div className='container'>
      
      <Link to="/femme" className="headerImg1 imageWrapper">
        <img src={header1} alt="Femme" />
        <p className="imageParagraph">FEMME</p>
      </Link>

      <Link to="/homme" className="headerImg2 imageWrapper">
        <img src={header2} alt="Homme" />
        <p className="imageParagraph">HOMME</p>
      </Link>

      <Link to="/beaute" className="headerImg3 imageWrapper">
        <img src={header3} alt="Beaute" />
        <p className="imageParagraph">BEAUTE</p>
      </Link>

    </div>
  );
}

export default Main;
