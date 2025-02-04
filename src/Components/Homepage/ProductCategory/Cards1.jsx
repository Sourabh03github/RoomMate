import React from "react";
import "./ProductCategory.css";
// import matt from "../../../asset/mattre.png";
import matt from "../../../asset/matt1.png";
import { Link } from "react-router-dom";

function Cards1(props) {
  return (
    <div>
      <Link to="/Mattresses">
        <div className="glassBox">
          <div className="glassBox__imgBox w-full flex justify-center items-center flex-col mb-8">
            {/* <img src="https://i.ibb.co/s5phbkg/shoe-golden.png" alt="" /> */}
            <div className="procat w-4/5">
              <img src={matt} className="w-" alt="" />
            </div>
            <h3 className="glassBox__title font-400 mt-12">Mattresses</h3>
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

export default Cards1;
