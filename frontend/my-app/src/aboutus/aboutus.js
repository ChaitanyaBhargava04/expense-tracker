import React from 'react';
import'./aboutus.css';
import image1 from '../aboutus/exp1.jpg';

function aboutus() {
  return (
    <div>
        <h1>About us</h1>
        <div className="row">
            <div className="col-4">
                <img src={image1} width ="100%" height="100%" alt="" />
            </div>
            <div className="col-8">
                <p>If you are looking for a complicated money management application that promises you to do everything you ever wanted, then you have to keep looking because this app is not for you.
This expense tracker & manager promises to be a very simple, intuitive and straight forward mobile application that helps and assists you to track all your expenses, manage your budgets/costs and organize your spending, enabling you to make savings and order in your financial life.
Dedicated in helping you manage your financial life, easily, efficiently and with no complications.
</p>
            </div>
        </div>
      
    </div>
  )
}

export default aboutus; 
