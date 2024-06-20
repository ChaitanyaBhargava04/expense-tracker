import React from 'react';
import image4 from '../header/logo2.png';
import './header.css';  
function Header() {
  return (
    <div class="header">
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <img src={image4} width="80px" height="80px" />
    <a class="navbar-brand" href="#">Expense Tracker</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/aboutus">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/process">Process</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <button class="btn btn-outline-success" type="submit"> <a href="/signup"> Signin </a> </button>
        <button class="btn btn-outline-success" type="submit"> <a href="/login"> Login </a> </button>

      </form>
    </div>
  </div>
</nav>
     </div>

  
  );
}

export default Header;

