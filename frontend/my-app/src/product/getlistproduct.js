import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash ,  faEye} from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate  } from 'react-router-dom';
import './getlistproduct.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    // Fetch the list of products from the API
    axios
      .get('http://127.0.0.1:4000/admin/productlist')
      .then((response) => {
        setProducts(response.data.data);
        console.log(response.data,"Res Data")
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleDelete = (productId) => {
    // Delete the product using the API
    axios
      .delete(`http://127.0.0.1:4000/admin/deleteproduct/${productId}`)
      .then(() => {
        // Filter out the deleted product from the state
        setProducts((prevProducts) =>
          prevProducts.filter((product) =>  product._id !== productId)
        );

        // Show toast notification for successful deletion
        toast.success('Product deleted successfully!');
        // history.push('/product-list');
        navigate('/productlist');
      })
      .catch((error) => {
        console.error('Error deleting product:', error);
        toast.error('Error deleting product. Please try again.');
      });
  };
  const logout =()=>{
    localStorage.clear()
    window.location.reload()
}
const handleLogout = () => {
  localStorage.removeItem("token");
  window.location='/landing';
};
  return (
    // <button onClick={logout}>Logout</button>
    <div className="container2 mt-5">
      <div>
      <button className="white_btn" onClick={handleLogout}>
					Logout
				</button></div>
      <h2>Detail List</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th id="t1">Title</th>
            <th id="t1">Category</th>
            <th id="t1">Amount</th>
            <th id="t1">Date</th>
            <th id="t1">Actions</th>
          </tr>
        </thead>
        <tbody>
            {/* console.log(products,"trfghjkofygu") */}
          {products.map((product) => (
            <tr key={product._id}>
              <td id="t2">{product.title}</td>
              <td id="t3">{product.category}</td>
              <td id="t2">{product.amount}</td>
              <td id="t3">{product.date}</td>
              <td id="t2">
                <Link to={`/update/${product._id}`}>
                  <FontAwesomeIcon icon={faEdit} className="me-2" />
                </Link>
                <Link to={`/productdetails/${product._id}`}>
    <FontAwesomeIcon icon={faEye} className="me-2" /> {/* Add the view icon */}
  </Link>
                <FontAwesomeIcon
                  icon={faTrash}
                  className="text-danger"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleDelete(product._id)}
                />


              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;











