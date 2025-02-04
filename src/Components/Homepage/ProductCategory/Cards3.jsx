import React from "react";
import "./ProductCategory.css";
import sofa from "../../../asset/sofa-2.png";
import { Link } from "react-router-dom";

function Cards3(props) {
  return (
    <div>
      <Link to="/BeddingAccessories/loungers">
        <div className="glassBox">
          <div className="glassBox__imgBox">
            {/* <img src="https://i.ibb.co/s5phbkg/shoe-golden.png" alt="" /> */}
            <img src={sofa} alt="" />
            <h3 className="glassBox__title">Sofas</h3>
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

export default Cards3;
