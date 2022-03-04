import React from "react";
import web3 from "../src/images/heart2.jpg"
import web2 from "../src/images/cancer.jpg"
import web1 from "../src/images/kidney2.jpg"
const Services=()=>{
    return(
        <>
        <div className="container-fluid d-flex justify-content-center ">
            <div className="row">
                <div className="col-md-4">
                <div class="card">
        <img class="card-img-top" src={web3} alt="Card image cap"/>
         <div class="card-body">
         <h5 class="card-title">Heart health</h5>
        <p class="card-text">Check if your heart is working properly via our advanced machine learning algorithms.</p>
        <a href="/form3" className="btn btn-primary">Check Health</a>
  </div>
</div>

                    </div>
                <div className="col-md-4">
                <div class="card">
  <img class="card-img-top" src={web2} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Cancer risk</h5>
    <p class="card-text">Check if you have the symptoms of breast cancer. Remember prevention is better than cure.</p>
    <a href="/form2" class="btn btn-primary">Check Health</a>
  </div>
</div>
                    </div>
                <div className="col-md-4">
                <div class="card">
  <img class="card-img-top" src={web1} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Kidney Health</h5>
    <p class="card-text">Check if you are prone to kidney failure using our advanced algorithms developed by our talented engineers.</p>
    <a href="/form1" class="btn btn-primary">Check Health</a>
  </div>
                    </div>
                </div>
            </div>
        
           




</div> 
<div class="spacetaker">

</div>
        
        </>
    );
};

export default Services;