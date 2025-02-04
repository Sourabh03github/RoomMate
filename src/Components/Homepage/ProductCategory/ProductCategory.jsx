import React from "react";
import "./ProductCategory.css";
import sofa from "../../../asset/sofa.png";
import tick from "../../../asset/Vector.png";
import Cards1 from "./Cards1";
import Cards2 from "./Cards2";
import Cards3 from "./Cards3";
import Cards4 from "./Cards4";

function ProductCategory() {
  return (
    <div>
      <div className="pc-title">
        <h2>
          Product <span>Categories</span>
        </h2>
      </div>
      <div className="product-cards">
        <Cards1 />
        <Cards2 />
        <Cards3 />
        <Cards4 />
      </div>
      <div className="pc-cards">
        <div className="pc-cards-right">
          <div className="right-title">
            <h2 className="title-font">A Modern Home Starts with Roommates.</h2>
          </div>
          <div className="right-para">
            <p className="title-font">
              You'll find the perfect home furnishings without breaking your
              budget.
            </p>
          </div>
          <img src={sofa} alt="sofa" className="right-img" />
        </div>
        <div className="pc-cards-left">
          <div className="pc-card-left">
            <div className="left-top-title">
              <span>
                <img src={tick} alt="tick" className="title-tick" />
              </span>
              <div className="first-title">
                <h3 className="title-font">
                  A Customized Experience for Every Style
                </h3>
                <p className="title-font">
                  Our customizing tool allows you to filter by size, color, type
                  of furniture and more!
                </p>
              </div>
            </div>

            <div className="left-bottom-title">
              <span>
                <img src={tick} alt="tick" className="title-tick" />
              </span>
              <div className="first-title">
                <h3 className="title-font">Competitive Prices</h3>
                <p className="title-font">
                  The majority of our products are priced less as compared to
                  others brands.
                </p>
              </div>
            </div>
            <div className="left-bottom-para"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCategory;
