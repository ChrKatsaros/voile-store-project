import React from 'react';
// Όταν πατηθεί το κουμπί, περνάμε στο parent το προϊόν
function ProductCardComponent(props) {
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
        <div className="image-hover-overlay">
          <button className="hover-add-to-cart" onClick={handleClick}>Add to Cart</button>
        </div>
      </div>

      <div className="product-info">
        <h3 className="product-title-text">{props.name}</h3>
        <p className="product-price-text">{props.price} €</p>
      </div>
    </div>
  );
}

export default ProductCardComponent;
