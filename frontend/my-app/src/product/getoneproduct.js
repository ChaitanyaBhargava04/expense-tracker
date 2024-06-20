import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './getoneproduct.css';
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: '',
    category: '',
    amount: 0,
    date: '',
  });

  useEffect(() => {
    // Fetch the product details for the specified ID
    axios
      .get(`http://127.0.0.1:4000/admin/products/${id}`)
      .then((response) => {
        const productData = response.data.data; // Extract the data from the response
        setProduct(productData); // Set the product state with the extracted data
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  return (
    <div className="container3 mt-5" id="t6">
      <h2>Detail</h2>
      <div className="card1">
        <div className="card-body1" id="t4">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.category}</p>
          <p className="card-text">Amount: {product.amount}</p>
          <p className="card-text">Date: ${product.date}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
