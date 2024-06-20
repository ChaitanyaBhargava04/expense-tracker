import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate  } from 'react-router-dom';
import './addproduct.css';
const AddProduct = () => {
  const [product, setProduct] = useState({
    title: '',
    category: '',
    amount: 0,
    date: '',
  });

  const navigate = useNavigate(); 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the product data to the backend using Axios POST request
    axios
      .post('http://127.0.0.1:4000/admin/addproducts', product)
      .then((response) => {
        console.log('Detail added successfully:', response.data);

        toast.success('Detail added successfully!', {
            onClose: () => {
              // Redirect to the product listing component
              navigate('/productlist');
            },
          });

        // You can perform additional actions after successful product addition
      })
      .catch((error) => {
        console.error('Error adding product:', error);
        toast.error('Error adding product. Please try again.');
      });
  };



  return (
    <div className="container1">
      <h2 className="mb-4">Expense Tracker</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title:</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={product.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category:</label>
          <input
            type="text"
            className="form-control"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Amount:</label>
          <input
            type="number"
            className="form-control"
            name="amount"
            value={product.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date:</label>
          <input
            type="date"
            className="form-control"
            name="date"
            value={product.date}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    </div>
  );
};

export default AddProduct;
