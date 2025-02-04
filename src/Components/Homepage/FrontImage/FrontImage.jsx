import React from "react";
import "./FrontImage.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import img from "../../../asset/img.png";

function FrontImage() {
  return (
    <div>
      <img className="frontimage" src={img} alt="" />
      <div className="frontiimage">
        {/* <Tippy
          content={
            <span className="span-tip">
              <h3>Vimle Sofa</h3>
              <p>2-seat sofa, Vissle grey</p>
              <h2>Rp3.195.000</h2>
              <button>Shop Now</button>
            </span>
          }
        >
          <button>My button</button>
        </Tippy> */}
      </div>
      {/* <h1 className="frontimage-title">
        Now, mattress <p>shopping is simple</p>
      </h1>
      <button className="frontimage-btn">Know more</button> */}
    </div>
  );
}

export default FrontImage;
