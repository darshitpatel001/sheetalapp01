import React from "react";
// import { Link } from "react-router-dom";
import CustComLink from "../CustamLink/CustomLink";

export default function HeadersHoc() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-light navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand bg-dark" href="#">
            Logo
          </a>
        
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <CustComLink class="nav-item" to="/"> Home</CustComLink>
              </li>
              <li class="nav-item">
                <CustComLink class="nav-item" to="/Loggin"> Login</CustComLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
