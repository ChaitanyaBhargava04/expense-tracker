// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faCoffee} from "@fortawesome/free-solid-svg-icons";
// import React, { useEffect, useState } from "react";
// import {auth,provider} from "../googleSignin/config";
// import {signInWithPopup} from "firebase/auth";
// import Google from "../login/google.png";
// import Facebook from "../login/facebook.png";
// import Github from "../login/github.png";
// import Login from "../login/login";
// import Landing from "../landing/landing";

// import image4 from '../signup/8432.jpg';
//  function Signup() {
//   const [value,setValue] = useState('')
//   const handleClick =()=>{
//       signInWithPopup(auth,provider).then((data)=>{
//           setValue(data.user.email)
//           localStorage.setItem("email",data.user.email)
//       })
//   }

//   useEffect(()=>{
//       setValue(localStorage.getItem('email'))
//   })
//     return (
//       <div className="signup">
//         <div class="row">
//         <div class="col-12">
//         <div class="form">
//         <p class="p"> Hello,Friend</p>
//         <form>
//         <input type="text" class="text1" placeholder="Name" name="uname" required ></input>
//         <input type="text" class="text2" placeholder="Example@gmail.com" name="email" required></input>
//         <input type="password" class="text3" placeholder="Password" name="psw" required></input>
//         </form>
//         <h6>OR</h6>
//         <h6>Sign-up with</h6>
//         <a href=""><span class="dot1"></span></a>
//         <a href=""><span class="dot3"></span></a>
//         <a href=""><span class="dot5"></span></a>
//         <input type="checkbox" class="check1"></input>
//         <span id="span2">I read and agree to</span>
//         <span id="span1">Terms & Conditions</span>
//         <button class="button1">CREATE ACCOUNT</button>
//         </div>
//         </div>
//         <div class="col-6">
//         <p class="p2"> Managing money, made simple</p>
//         <img src={image4} width="400px" height="400px"/>
//         </div>
//         </div>
//         </div>
//         );
//         }
    
//        export default Signup;
// function SignIn(){
//   const [value,setValue] = useState('')


//   const handleClick =()=>{
//       signInWithPopup(auth,provider).then((data)=>{
//           setValue(data.user.email)
//           localStorage.setItem("email",data.user.email)
//       })
//   }

//   useEffect(()=>{
//       setValue(localStorage.getItem('email'))
//   })
//   const [data, setData] = useState({
// 		firstName: "",
// 		lastName: "",
// 		email: "",
// 		password: "",
// 	});
// 	const [error, setError] = useState("");
// 	const navigate = useNavigate();

// 	const handleChange = ({ currentTarget: input }) => {
// 		setData({ ...data, [input.name]: input.value });
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		try {
// 			const url = "http://127.0.0.1:4000/admin/register";
// 			const { data: res } = await axios.post(url, data);
// 			navigate("/login");
// 			console.log(res.message);
// 		} catch (error) {
// 			if (
// 				error.response &&
// 				error.response.status >= 400 &&
// 				error.response.status <= 500
// 			) {
// 				setError(error.response.data.message);
// 			}
// 		}
// 	};

// return (
//     <>
//      {value?<Login/>:
//   <div>
  
//       <button onClick={handleClick}>Signin With Google</button>
 
//   </div>
//     <div className="SignIn">
//       <h1 className="loginTitle">Choose a Login Method</h1>
//       <div className="wrapper">
//         <div className="left">
//     <div className="loginButton google"    onClick={handleClick}>
//            <img src={Google} alt="" className="icon" />
//             Google 
//           </div>
//           <div className="loginButton facebook" >
//             <img src={Facebook} alt="" className="icon" />
//             Facebook
//           </div>
//           <div className="loginButton github" >
//             <img src={Github} alt="" className="icon" />
//             Github
//           </div>
//         </div>
//         <div className="center">
//           <div className="line" />
//           <div className="or">OR</div>
//         </div>
//         <div className="right">
//           <input type="text" placeholder="Username" />
//           <input type="text" placeholder="Password" />
//           <input type="text" placeholder="Email" />
//           <button className="submit" onSubmit={handleSubmit}>Sign in</button>
//         </div>
//       </div>
//     </div>}
//  </>
//   );
// };


// export default SignIn;
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
 import { toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
	const navigate = useNavigate();
	const [input, setInput] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	 const [error, setError] = useState("");

	// const handleChange = ({ currentTarget: input }) => {
	// 	setData({ ...data, [input.name]: input.value });
	// };

	const handleSubmit = async (e) => {
		e.preventDefault();
		// localStorage.setItem("user", JSON.stringify(input));
		//const url = "http://127.0.0.1:4000/admin/signup";
	 	//const { input: res } = await axios.post(url, input);
		//navigate("/login");
		//console.log(res.message);
		try {
			localStorage.setItem("user", JSON.stringify(input));
			const url = "http://127.0.0.1:4000/admin/signup";
			const { input: res } = await axios.post(url, input);
			navigate("/login");
			console.log(res.message);
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
		<>
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Already Registered?</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sign in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={(e) =>
							setInput({
								...input ,
								[e.target.name]: e.target.value ,
							})
						}
							value={input.firstName}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={(e) =>
								setInput({
									...input ,
									[e.target.name]: e.target.value ,
								})
							}
							value={input.lastName}
							required
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={(e) =>
								setInput({
									...input ,
									[e.target.name]: e.target.value ,
								})
							}
							value={input.email}
							required
							className={styles.input1}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={(e) =>
								setInput({
									...input ,
									[e.target.name]: e.target.value ,
								})
							}
							value={input.password}
							required
							className={styles.input1}
						/>
						<div>
						<input type="checkbox" required className={styles.check1} />
                        <span className={styles.span2}>I read and agree to <span className={styles.span1}>Terms & Conditions</span></span></div>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
		</>
	);
};

export default Signup;
