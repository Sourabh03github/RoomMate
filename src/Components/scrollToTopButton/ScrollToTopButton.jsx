import React, { useState } from "react";
import { FaArrowCircleUp, FaWhatsapp } from "react-icons/fa";
import "./scrollToTopButton.css";
import whatsAppIcon from "../../asset/whatsapp.png";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    console.log("hi");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
		in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div>
      <a href="https://wa.me/9834683022">
        <img src={whatsAppIcon} alt="whataspp" className="whatsAppButton" />
      </a>
      <FaArrowCircleUp
        className="backToTopButton"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </div>
  );
};

export default ScrollToTopButton;
