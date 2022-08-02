import React, { useState } from "react";
import logo from "../../../utils/assets/logo1.png";
import { Link } from "react-router-dom";
import "../../../utils/css/header.css";
import { MdSearch, MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import { IoBagSharp } from "react-icons/io5";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 150);
  });

  return (
    <>
      <header className="header">
        <div className="container flex">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="nav">
            <ul
              className={sidebar ? "nav-links-sidebar" : "nav-links"}
              onClick={() => setSidebar(false)}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Service</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li className="icon">
                <MdSearch className="HeaderIcon" />
                <IoBagSharp className="HeaderIcon" />
              </li>
            </ul>
          </div>
          <button
            className="navbar-items-icon"
            onClick={() => setSidebar(!sidebar)}
          >
            {sidebar ? <MdOutlineClose /> : <MdOutlineMenu />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;