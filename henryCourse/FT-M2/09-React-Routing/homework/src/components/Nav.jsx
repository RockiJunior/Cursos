//React component
import React from "react";
import { Link } from "react-router-dom";
//Dev Component
import Logo from "../img/logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import About from "./About.jsx";
import "./styled-components/Card.css";

function Nav({ onSearch }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to="/">
        <span className="navbar-brand">
          <img
            id="logoHenry"
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Henry - Weather App
        </span>
      </Link>
      <Link to="/about">
        <span>About</span>
      </Link>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Nav;
