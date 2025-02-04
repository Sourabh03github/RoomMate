import React from "react";
import "./ProductCategory.css";
// import foam from "../../../asset/foam.png";
import foam1 from "../../../asset/foams1.png";
import { Link } from "react-router-dom";

function Cards4(props) {
  return (
    <div>
      <Link to="/BeddingAccessories/foams">
        <div className="glassBox">
          <div className="glassBox__imgBox mb-16 ml-12">
            {/* <img src="https://i.ibb.co/s5phbkg/shoe-golden.png" alt="" /> */}
            <img src={foam1} alt="" />
            <h3 className="glassBox__title">Foams</h3>
          </div>
          {/* <div className="glassBox__content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
            sunt veniam adipisci fugit qui quaerat!
          </div> */}
        </div>
      </Link>
    </div>
  );
}

export default Cards4;
