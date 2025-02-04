import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "./data";
import logo from "../../../asset/Roommates_Updated.png";
import "./Header.css";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
          {/* <Link to="/">
            <h3 className="logo">
              Room
              <b>Mate</b>
            </h3>
          </Link> */}
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {/* {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })} */}
            <Link to="/" className="text-7xl">
              Home
            </Link>
            <Link to="/Mattresses">Mattresses</Link>
            <Link to="/Products">Bed Accessories</Link>
            <Link to="/contact-dealer">Contact Dealers</Link>
            <Link to="/AboutUs">About Us</Link>
            <Link to="/https://warranty.roommatemattress.com/">
              Claim Warranty
            </Link>

            <Link to="/blogs">Blogs</Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
