import React from "react";
import web from "../src/images/caduceus logo,health logo,medical logo.png"
// import weber from "..src/images/nurse.png"
import './index.css';
const Home=()=>{
    return(
        <>
        <section id="header" className="">
        <div class="container-fluid nav_bg">
            <div class="row">
                <div class="col-10 mx-auto">
                    <div className="row pt-6 mt-6">
                    <div className="col-md-6 pt-6 order-2 order-lg-1 abc">
                        <div className="mt-3 asdf">
                            </div>
                        <h2 className="mt-6">
                            Check your health with <strong className="brand-name">Phenom Medicare</strong>
                        </h2>
                        <h5 className="my-3">
                            We help in analysing your health records to find the risk for any potential diseases using our advanced machine learning algorithms.
                        </h5>
                        <div className="mt-3">
                            <a href="/services" className="btn btn-primary">Get Started!</a>
                        </div>

                        </div>
                        <div className="col-lg-6 gx-6 order-l order-lg-2 header-img">
                            <img src={web} className="img-fluid animated ml-2"  alt="im" />
                            </div>
                            </div>
                    </div>
                </div>
            </div>
            <div class="spacetaker">

            </div>
            </section>
        </>
    );
};

export default Home;