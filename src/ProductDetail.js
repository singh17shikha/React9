import React from 'react';
import './ProductDetail.css';

const ProductDetail = (props) => {
  const { productId, productPic, productName, brand, productDescription, price } = props.productDetails;

  const handleClick = () => {
    alert(`Product of ID ${productId}, which is ${productName} of brand ${brand} has a price of ${price} and has been added to the cart. Please proceed to pay!`);
  }

  return (
    <div className="product-card">
      <img src={productPic} alt={productName} className="product-pic" />
      <h3 className="product-name">{productName}</h3>
      <h4 className="brand">{brand}</h4>
      <p className="product-description">{productDescription}</p>
      <h5 className="price">{price}</h5>
      <button className="add-to-cart" onClick={handleClick}>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;
