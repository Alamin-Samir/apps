import React from 'react';

function ProductCard(props) {
  return (
    <div>
      <img src={props.image} alt={props.title} width="100" />
      <h2>{props.title}</h2>
      <p>{props.price} টাকা</p>
    </div>
  );
}

export default ProductCard;