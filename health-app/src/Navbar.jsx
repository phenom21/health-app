import React from "react";
import web from "../src/images/caduceus logo,health logo,medical logo.png"
import './index.css';
import { NavLink } from "react-router-dom";
const Navbar=()=>{
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light nava">
  <div class="container-fluid nava">
    <NavLink class="navbar-brand ire" to="/">Phenom Medicare</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink class="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/services">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/about">About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
     {/*}  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <NavLink class="navbar-brand ire" to="/">Phenom Healthcare</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink class="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link active" aria-current="page" to="/services">Services</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link active" aria-current="page" to="/about">About</NavLink>
        </li>
        {/* <li class="nav-item">
          <NavLink class="nav-link" to="/services">Services</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/about">About</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/contact">Contact</NavLink>
        </li> 
      </ul>
    </div>
  </div>
    </nav>*/}
        </>
    )
};

export default Navbar;
