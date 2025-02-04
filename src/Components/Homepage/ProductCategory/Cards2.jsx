import React from "react";
import "./ProductCategory.css";
import pillows from "../../../asset/pillows.png";
import { Link, NavLink } from "react-router-dom";

function Cards2(props) {
  return (
    <div>
      <Link to="/BeddingAccessories/pillow">
        <div className="glassBox">
          <div className="glassBox__imgBox w-full flex justify-center items-center flex-col mb-12">
            {/* <img src="https://i.ibb.co/s5phbkg/shoe-golden.png" alt="" /> */}
            <div className="procat w-2/3">
              <img src={pillows} className="w-" alt="" />
            </div>
            <h3 className="glassBox__title font-400">Pillows</h3>
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

export default Cards2;
