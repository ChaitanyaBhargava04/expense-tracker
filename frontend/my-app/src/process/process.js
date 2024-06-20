import React from 'react';
import'./process.css';
import image1 from '../process/s123.png'
import image2 from '../process/s22.png'
import image3 from '../process/s33.png'
import image4 from '../process/s44.png'
import image5 from '../process/s55.png'
function Process() {
  return (
    <div>
      <h1><center>How it works</center></h1>
        <h1>Step1</h1>
        <div className="row">
            <div className="col-4">
                <img src={image1} width ="90%" alt="" />
            </div>
            <div className="col-8">
                <h2><p> In this step we will see that when we login in the website through our email and password
                  and then our application will show up and start our work.
</p></h2>
            </div>
        </div>
        <h1>Step2</h1>
        <div className="row">
          <div className="col-4">
            <img src={image2} width="90%" alt="" />
          </div>
          <div className="col-8">
            <h2><p>In this step we will put our name and total income and the date in which we will
              get our salary and bonus.</p></h2>
          </div>
          <h1>Step3</h1>
          <div className="row">
            <div className="col-4">
              <img src={image3} width="90%" alt="" /></div>
              <div className="col-8">
                <h2><p> In this step we will click on the submit button
                  and see the total expenses on the given date</p></h2>
            </div>
            <h1>Step4</h1>
            < div className="row">
              <div div className="col-4">
                <img src={image4} width="90%" alt="" /></div>
                <div className="col-8">
                  <h2><p>In this step we will put the name of the expense and the amount we spent and the date
                    on which we have spend the money on it </p></h2>
                </div>
                <h1>Step5</h1>
                <div class="row">
                  <div className="col-4">
                    <img src={image5} width="90%" alt="" /></div>
                    <div className="col-8">
                      <h2><p>In this step we will press the submit button and it will tell your total income and 
                        amunt deducted and can see the history of your expenses within the application</p></h2>
                    </div>
                  
                </div>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Process; 
 