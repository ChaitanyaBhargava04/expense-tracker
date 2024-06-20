import React from "react";
import './landing.css';
import image5 from '../login/back2.png';
import image6 from '../landing/fet.png';
import image7 from '../landing/fet2.png';
import image8 from '../landing/fet3.png';
import image9 from '../landing/fet4.png';
import image10 from '../landing/icon2.png';
import image11 from '../landing/icon3.png';
import image12 from '../landing/icon4.webp';
function Landing() {
    return (
      <div className="header">
<div class="landing">
{/* <a href="#link1"><button id="btn1">FEATURES</button></a>
<a href="http://localhost:3000/aboutus"><button id="btn2">ABOUT US</button></a> */}
 <a href="#link1" class="btn btn-primary" id="btn1">FEATURES</a>
 <a href="http://localhost:3000/aboutus" class="btn btn-primary" id="btn2">ABOUT US</a>
<img src={image5} width="100%" height="600px"></img>
<a id="link1"><p id="p1">FEATURES</p></a>
<h6>Organize your incomes, manage your family budget, keep track of expenses while traveling and understand where all your money are with some great, yet simple features.</h6>
<div class="row">
<div class="col-3">
<div id="box1">
<img src={image6} width="100%" height="220px" /><br></br><br></br>
<p id="p2">Intuitive, clean and simple way of adding daily expenses and incomes. main screen calendar that gives a quick monthly overview over all transactions</p>
</div>
</div>
<div class="col-3">
<div id="box2">
<img src={image7} width="100%" height="220px"/><br></br><br></br>
<p id="p2">Your data is always safe wherever your are and what ever device you are using.</p>
</div>
</div>
<div class="col-3">
<div id="box3">
<img src={image8}  width="100%" height="220px"/><br></br><br></br>
<p id="p2">A compact yet comprehensive list of expense and income categories. Add or edit categories, if defaults don’t work for you</p>
</div>
</div>
<div class="col-3">
<div id="box4">
<img src={image9}  width="100%" height="220px"/><br></br><br></br>
<p id="p2">Set reminders for future inflow or outflow transactions and recurrent payments – never miss another deadline</p>
</div>
</div>
</div>
<p id="p3">FEEDBACK</p>
<div class="row">
  <div class="col-4">
<div class="card">
<img src={image10} width="50%" />
  <div class="card-body">
    <h5 class="card-title">Abhishek</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
<div class="col-4">
<div class="card">
<img src={image11} width="50%" />
  <div class="card-body">
    <h5 class="card-title">Rahul</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  </div>
  <div id="a1"><a href="http://localhost:3000/feedback" target="_blank" class="btn btn-primary">Give Feedback</a></div>
</div>
<div class="col-4">
<div class="card">
<img src={image12} width="50%" />
  <div class="card-body">
    <h5 class="card-title">Aryan</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
</div>
<div id="footer">
  <p id="p4">Copyright © 2023 Expense Tracker, Inc.</p>
</div>
</div>
</div>
);
}

export default Landing;