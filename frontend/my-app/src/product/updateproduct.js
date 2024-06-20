import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate  } from 'react-router-dom';
import './updateproduct.css';
const UpdateProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: '',
    category: '',
    amount: 0,
    date: '',
  });

  const navigate = useNavigate(); 

  useEffect(() => {
    // Fetch the product details for the specified ID
    axios
      .get(`http://127.0.0.1:4000/admin/products/${id}`)
      .then((response) => {
        setProduct(response.data.data); // Assuming 'data' is an array with a single product object
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    // Call the API to update the product
    axios
      .post(`http://127.0.0.1:4000/admin/updateproduct/${product._id}`, product)
      .then((response) => {
        console.log('Detail updated successfully:', response.data);
        toast.success('Detail  updated  successfully!', {
          onClose: () => {
            // Redirect to the product listing component
            navigate('/productlist');
          },
        });
        // Redirect or show a success message
      })
      .catch((error) => {
        console.error('Error updating product:', error);
        // Show an error message or toast notification
      });
  };

  return (
    <div className="container4 mt-5">
      <h2>Update Detail</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={product.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            name="category"
            value={product.category}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Amount</label>
          <input
            type="number"
            className="form-control"
            name="amount"
            value={product.amount}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            name="date"
            value={product.date}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleUpdate}>
          Update Detail
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;


