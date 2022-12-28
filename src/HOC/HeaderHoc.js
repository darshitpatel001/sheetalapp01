import React from "react";
import { Link } from "react-router-dom";

export default function HeadersHoc() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Logo
          </a>
        
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-item" to="/"> Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-item" to="/Loggin"> Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
