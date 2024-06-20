import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import '../node_modules/jquery/dist/jquery';
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {BrowserRouter} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Header from  './header/header.js';
import MayShowHeader from './MayShowHeader/MayShowHeader';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>
//   </React.StrictMode>

// );
ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
<MayShowHeader>
	    <Header />
</MayShowHeader>
			<App />
			<ToastContainer />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
