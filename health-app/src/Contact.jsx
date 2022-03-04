import React from "react";
import web from "../src/images/caduceus logo,health logo,medical logo.png"
const Contact=()=>{
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
                            <h4 className="my-3">
                            <strong>Phone Number:</strong> +918362735913/8372962923
                        </h4>
                        <h4 className="my-3">
                            <strong>Email:</strong> phenommedicare@gmail.com
                        </h4>
                        <h4 className="my-3">
                           <strong>Website:</strong>  www.phenom_medicare.com
                        </h4>
                        {/* <div className="mt-3">
                            <a href="/services" className="btn btn-primary">Get Started!</a>
                        </div> */}

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

export default Contact;