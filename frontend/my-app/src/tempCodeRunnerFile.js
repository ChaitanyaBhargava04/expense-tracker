import './App.css';
import Landing from './landing/landing.js';
import Login from './login/login.js';
import Aboutus from './aboutus/aboutus.js';
import {Route,Routes} from 'react-router-dom';
import AddProduct from './product/addproduct.js';
import Signup from './signup/signup.js'
import Feedback from './feedback/feedback';
import Process from './process/process';
import ProductList from "./product/getlistproduct";
import UpdateProduct from "./product/updateproduct";
import ProductDetail from "./product/getoneproduct";
//import Header from './header/header';
//import MayShowHeader from './MayShowHeader/MayShowHeader';

function App() {
  
  // const user = localStorage.getItem('token');
  //param
  return (
    <>
    <div className="App">
      <Routes>
      <Route path= "/" exact element={<Landing/>}/>
      <Route path= "/landing" exact element={<Landing/>}/>
      <Route path="/login" exact element={<Login/>}/>
        {/* <Route path="/" exact element={<Signup/>}/>
        <Route path="/signup" exact element={<Signup/>}/> */}
        <Route path="/aboutus" exact element={<Aboutus/>}/>
        <Route path="/addproduct" exact element={<AddProduct/>}/>
        <Route path="/productlist" exact element={<ProductList />} />
			<Route path="/update/:id" exact element={<UpdateProduct />} />
			<Route path="/productdetails/:id" exact element={<ProductDetail/>} />
        <Route path="/signup" exact element={<Signup/>}/>
        <Route path="/feedback" exact element={<Feedback/>}/>
        <Route path="/process" exact element={<Process/>}/>
    </Routes>
    </div>
    </>
  );
}

export default App;