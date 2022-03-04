import React from "react";
import web from "../src/images/caduceus logo,health logo,medical logo.png"
const About=()=>{
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
                            {/* <h4 className="my-3">
                            We are a team of budding entraprenuers looking forward for solving real world healcare realted problems.
                        </h4> */}
                        <h4 className="my-3">
                            <strong>Team members:</strong>
                        </h4>
                        <h4 className="my-3">
                           Vinayak Aggarwal (just another techno geek)
                        </h4>
                        <h4 className="my-3">
                           Nikshat Sharma (a studious nd a perfectionist guy)
                        </h4>

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

export default About;