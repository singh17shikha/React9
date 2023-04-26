import React from 'react';
import ProductDetail from './ProductDetail';
import './App.css';

const productDetails = [
  {
    productId: '1',
    productPic: 'https://www.amazon.in/Souled-Store-Black-Cotton-T-Shirt/dp/B08KGFK8TF?th=1&psc=1',
    productName: 'Shoes',
    Brand: 'Adidas',
    productDescription: 'A pair of comfortable shoes',
    Price: '7$',
    Rating: '4',
  },
  {
    productId: '2',
    productPic: 'https://www.amazon.in/Souled-Store-Black-Cotton-T-Shirt/dp/B08KGFK8TF?th=1&psc=1',
    productName: 'T-Shirt',
    Brand: 'Nike',
    productDescription: 'A comfortable t-shirt',
    Price: '10$',
    Rating: '3',
  },
  {
    productId: '3',
    productPic: 'https://www.amazon.in/Souled-Store-Black-Cotton-T-Shirt/dp/B08KGFK8TF?th=1&psc=1',
    productName: 'Pants',
    Brand: 'Levi',
    productDescription: 'A pair of comfortable pants',
    Price: '15$',
    Rating: '5',
  },
  {
    productId: '4',
    productPic: 'https://www.amazon.in/Souled-Store-Black-Cotton-T-Shirt/dp/B08KGFK8TF?th=1&psc=1',
    productName: 'Jacket',
    Brand: 'Columbia',
    productDescription: 'A waterproof jacket',
    Price: '50$',
    Rating: '4',
  },
  {
    productId: '5',
    productPic: 'https://www.amazon.in/Souled-Store-Black-Cotton-T-Shirt/dp/B08KGFK8TF?th=1&psc=1',
    productName: 'Backpack',
    Brand: 'North Face',
    productDescription: 'A sturdy backpack for hiking',
    Price: '30$',
    Rating: '5',
  },
];

const App = () => {
  return (
    <div className="product-container">
      {productDetails.map((product) => (
        <ProductDetail key={product.productId} product={product} />
      ))}
    </div>
  );
};

export default App;

