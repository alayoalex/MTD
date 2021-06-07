import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logo from "../images/logo.svg";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import useIsLoggedIn from "./IsAuth";

const Navbar = () => {
  const isLoggedIn = useIsLoggedIn();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen({ isOpen: !isOpen });
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Beach Resort" />
          </Link>
          <button type="button" className="nav-btn" onClick={handleToggle}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
        {isLoggedIn ? <AmplifySignOut /> : null}
      </div>
    </nav>
  );
};

export default Navbar;
