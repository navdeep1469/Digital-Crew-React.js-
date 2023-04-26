import React from "react";
import "./style.css";
import Rating from "@mui/material/Rating";

const ProductCard = ({
  title,
  category,
  description,
  image,
  ratings,
  price,
}) => {
  return (
    <div className='product-card'>
      <img src={image} alt={title} className='product-image' />

      <div className='product-details'>
        <h2 className='product-title'>{title}</h2>
        <p className='product-category'>{category}</p>
        <p className='product-description'>{description}</p>
        <div className='product-ratings'>
          <Rating name='simple-controlled' value={ratings} />
        </div>
        <p className='product-price'>${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
