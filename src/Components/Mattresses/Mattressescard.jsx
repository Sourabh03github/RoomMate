import React from "react";
import { Link } from "react-router-dom";
import "./MattressesCard.css";

function Mattressescard() {
  return (
    <div>
      <div className="flex justify-around flex-wrap w-full">
        <div className="max-w-2xl my-32">
          <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg h-96"
                src="https://wakefitdev.gumlet.io/img/mattresslifestyle/ortho_02.jpg?w=1700"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                  Orthopedic Mattress
                </h5>
              </a>
              <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
                Premium Mattress with comfort layer of High Resilience and Base
                layer of Rebonded.
              </p>
              <Link
                to="/ProductStaticDes"
                href="#"
                className="text-white bg-yellow-300 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center "
              >
                Buy Now
                <svg
                  className="-mr-1 ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-2xl my-32">
          <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg h-96"
                src="https://wakefitdev.gumlet.io/img/mattresslifestyle/ortho_02.jpg?w=1700"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                  Orthopedic Mattress
                </h5>
              </a>
              <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
                Premium Mattress with comfort layer of High Resilience and Base
                layer of Rebonded.
              </p>
              <Link
                to="/ProductDes"
                href="#"
                className="text-white bg-yellow-300 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  "
              >
                Buy Now
                <svg
                  className="-mr-1 ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mattressescard;
