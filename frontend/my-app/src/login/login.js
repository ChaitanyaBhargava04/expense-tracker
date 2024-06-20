// import { useState } from "react";
// import axios from "axios";
// import { Link  } from "react-router-dom";
// import styles from "./styles.module.css";

//  //import Landing from "../landing/landing";
// const Login = () => {
// //	const navigate = useNavigate();
// 	const [input, setInput] = useState({ email: "", password: "" });
// 	const [error, setError] = useState("");

// 	//  const handleChange = ({ currentTarget: input }) => {
// 	//  	setInput({ ...input, [input.name]: input.value });
// 	//  };

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();		
// 		// 	const loggeduser = JSON.parse(localStorage.getItem("user"));
// 		// if(input.email === loggeduser.email && input.password === loggeduser.password)
// 		// {
// 		// 	localStorage.setItem("loggedin",true);
// 		// 	//const url = "http://localhost:4000/admin/login";
// 	    // 	//const { input: res } = await axios.post(url, input);
// 		//  	//localStorage.setItem("token", res.input);
// 		// 	 navigate("/");
// 		// }
// 		// else {
// 		// 	alert("Wrong Email or Password");
// 		// }
// 		try {
// 			const url = "http://localhost:4000/admin/login";
// 			const { input: res } = await axios.post(url, input);
// 			localStorage.setItem("token", res.input);
// 			const loggeduser = JSON.parse(localStorage.getItem("user"));
// 		if(input.email === loggeduser.email && input.password === loggeduser.password)
// 		{
// 			localStorage.setItem("loggedin",true);
// 			window.location = "/process";
// 			// navigate("/process");
// 		} 
// 		else {
// 			alert("Wrong Email or Password");
// 		}
// 	}
// 		catch (error) {
// 			if (
// 				error.response &&
// 				error.response.status >= 400 &&
// 				error.response.status <= 500
// 			) {
// 				setError(error.response.data.message);
			
// 			}
// 		}
// 	};

// 	return (
// 		<>
// 		<div className={styles.login_container}>
// 			<div className={styles.login_form_container}>
// 				<div className={styles.left}>
// 					<form className={styles.form_container} onSubmit={handleSubmit}>
// 						<h1>User Login</h1>
// 						<input
// 							type="email"
// 							placeholder="Email"
// 							name="email"
// 							onChange={(e) =>
// 								setInput({
// 									...input ,
// 									[e.target.name]: e.target.value ,
// 								})
// 							}
// 							value={input.email}
// 							required
// 							className={styles.input}
// 						/>
// 						<input
// 							type="password"
// 							placeholder="Password"
// 							name="password"
// 							onChange={(e) =>
// 								setInput({
// 									...input ,
// 									[e.target.name]: e.target.value ,
// 								})
// 							}
// 							value={input.password}
// 							required
// 							className={styles.input}
// 						/>
// 						{error && <div className={styles.error_msg}>{error}</div>}
// 						<button type="submit" className={styles.green_btn}>
// 							Sign In
// 						</button>
// 					</form>
// 				</div>
// 				<div className={styles.right}>
// 					<h1>Not a Member yet?</h1>
// 					<Link to="/signup">
// 						<button type="button" className={styles.white_btn}>
// 							Sign Up
// 						</button>
// 					</Link>
// 				</div>
// 			</div>
// 		</div>
// 		</>
// 	);
// };

// export default Login;
import { useState } from "react";
import axios from "axios";
import { Link  } from "react-router-dom";
//  import { toast } from 'react-toastify';
//  import 'react-toastify/dist/ReactToastify.css';
import styles from "./styles.module.css";
import { useNavigate  } from 'react-router-dom';

// import Landing from "../landing/landing";
const Login = () => {
//	const [data, setData] = useState({ email: "", password: "" });
const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
    //  const navigate = useNavigate();
	const navigate = useNavigate(); 
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
	// const handleChange = (event) => {
	// 	const { name, value } = event.target;
	// 	setData((prevLogin) => ({
	// 	  ...prevLogin,
	// 	  [name]: value,
	// 	}));
	//   };

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
		 	const url = "http://localhost:4000/admin/login";
		 	 const { data: res } = await axios.post(url, data) 
			
			localStorage.setItem("token", res.data);
			window.location = "/addproduct";
			//  navigate("/process");
	       
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
		
	};
	
	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>User Login</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
							title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sign In
						</button>
					</form>
				</div>
				{/* <div className={styles.right}>
					<h1>Not a Member yet?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sign Up
						</button>
					</Link>
				</div> */}
			</div>
		</div>
	
	);
};

export default Login;

