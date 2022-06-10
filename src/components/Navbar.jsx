/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Deskala
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"
                onClick={() => navigate("/home")}>Home</a>
                
              </li>
            </ul>
            <div className="d-flex">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#"
                        onClick={() => navigate("/")}
                        >
                            Login
                        </a>  
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick=
                        {() => {
                                navigate("/sign");
                            }
                        }>
                            Register
                        </a>
                    </li>
                </ul>            

            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
