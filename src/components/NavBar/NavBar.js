import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../../images/logo-01.png";

function NavBar() {
  const [show, setShow] = useState(false);

  const handleToggleMenu = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  const navLinks = [
    {
      name: "Action",
      link: "/action",
    },
    {
      name: "Animation",
      link: "/animation",
    },
    {
      name: "Crime",
      link: "/crime",
    },
    {
      name: "Drama",
      link: "/drama",
    },
    {
      name: "Fantasy",
      link: "/fantasy",
    },
    {
      name: "Horror",
      link: "/horror",
    },
  ];

  const isActiveRoute = (name) => {
    if (window.location.pathname === name) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <div className="black">
        <nav>
          <ul className={`menu ${show ? "active" : ""}`}>
            <li className="logo">
              <a href="#">
                {" "}
                <img src={logo} width="80" height="40" alt="navbar logo"></img>
              </a>
            </li>
            {navLinks.map((navLink, i) => {
              return (
                <li
                  className={`item ${
                    isActiveRoute(navLink.link) ? "bold" : ""
                  }`}
                  key={i}
                  onClick={handleToggleMenu}
                >
                  <NavLink exact to={navLink.link}>
                    {navLink.name}
                  </NavLink>
                </li>
              );
            })}
            <li className="toggle">
              <div
                onClick={handleToggleMenu}
                style={{
                  color: "white",
                  fontSize: "24px",
                  marginRight: "12px",
                }}
              >
                {!show ? (
                  <i className="fa fa-bars"></i>
                ) : (
                  <i className="fa fa-times"></i>
                )}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
