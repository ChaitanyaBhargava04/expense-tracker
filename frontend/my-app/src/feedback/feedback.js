import React, { useState } from 'react';
import './feedback.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate  } from 'react-router-dom';
//import styles from "./styles.module.css";
const Feedback = () => {
	const [input, setInput] = useState({
		name:"" ,
    email:"" ,
    subject:"" ,
    message:"" ,
	});
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevFeedback) => ({
      ...prevFeedback,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the feedback data to the backend using Axios POST request
    axios
      .post('http://127.0.0.1:4000/admin/addfeedbacks', input)
      .then((response) => {
        console.log('Feedback added successfully:', response.data);

        toast.success('Feedback added successfully!', {
            onClose: () => {
              // Redirect to the product listing component
              navigate('/landing');
            },
          });

        // You can perform additional actions after successful product addition
      })
      .catch((error) => {
        console.error('Error adding feedback:', error);
        toast.error('Error adding feedback. Please try again.');
      });
  };

  return (
    <div>
        <h1>Feedback</h1>
        <form onSubmit={handleSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="name" name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" 
							  onChange={handleChange}
							value={input.name}></input>
  </div><br></br>
  <div class="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input type="email" name="email" class="form-control" id="exampleInputEmail1" placeholder="email"  
     onChange={handleChange}	
							value={input.email}></input>
  </div><br></br>
  <div class="form-group">
    <label for="exampleInputEmail1">Subject</label>
    <input type="subject" name="subject" class="form-control" id="exampleInputSubject1" placeholder="subject" 
							  onChange={handleChange}
							value={input.subject}></input>
  </div><br></br>
  <div class="form-group">
    <label for="exampleInputMessage1">Message</label><br></br>
    <textarea id='t8' name='message' rows='3' cols='40' required 
                 onChange={handleChange}
							value={input.message}></textarea>
  </div><br></br>
  <button type="submit" id="bt1" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Feedback;