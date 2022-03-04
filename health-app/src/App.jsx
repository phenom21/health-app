import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Navbar from "./Navbar"
import form1 from "./form1";
import form2 from "./form2";
import form3 from "./form3";
import './index.css';
import {Switch, Route, Redirect} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
const App=()=>{
    return(
        <>
        <div class="backg">
        <div class="container-fluid nav_bg">
            <div class="row">
                <div class="col-10 mx-auto">
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/services" component={Services}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/form1" component={form1}/>
            <Route exact path="/form2" component={form2}/>
            <Route exact path="/form3" component={form3}/>
            <Redirect to="/"/>
          </Switch>
          </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default App;