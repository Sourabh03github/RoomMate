import React from "react";
import bed_img from "../../../asset/bed.png";
import "./SeeMore.css";
import { Link } from "react-router-dom";

function SeeMore() {
  return (
    <div>
      <div className="footer-img-card">
        {/* <img src={bed_img} alt="" /> */}
        <div className="footer-img">
          <div className="gradient">
            <h2>
              Explore our Mattresses
              <Link to="/Mattresses">
                <button className="btn-exp">Explore</button>
              </Link>
            </h2>
          </div>
        </div>
      </div>
      <div className="space"></div>
    </div>
  );
}

export default SeeMore;
