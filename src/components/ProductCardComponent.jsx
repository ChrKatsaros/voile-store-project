import React from 'react';

function ProductCardComponent(props) {
  // Όταν πατηθεί το κουμπί, περνάμε στο parent το προϊόν
  function handleClick() {
    props.onAddtoCartClick({
      name: props.name, 
      image: props.image,
      price: props.price
    });
  }

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={props.image} alt={props.name} />

        <div className="product-name-overlay">
          <h3>{props.name}</h3>
        </div>
      </div>

      <div className="product-price">
        <h2>{props.price} €</h2>
      </div>

      <div className="product-add-to-cart">
        <button onClick={handleClick}>Add To Cart</button>
      </div>
    </div>
  );
}

export default ProductCardComponent;
