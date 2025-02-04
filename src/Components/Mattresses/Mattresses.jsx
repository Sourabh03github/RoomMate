import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import orthopedic from "./orthopedic.jpg";
import ortho from "./photos/1.jpg";
import lux from "./photos/2.jpg";
import back from "./photos/3.jpg";
import imp from "./photos/4.jpg";
// import front from "./front1.jpg";
import front from "./compressed.jpg";

function Mattresses() {
  return (
    <div>
      <div className="text-gray-900 pt-8 pr-0 pb-14 pl-0 bg-white">
        <div className="w-full !p-1 pt-2 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16">
          <div className="flex flex-col items-center sm:px-5 md:flex-row">
            <div className="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
              <div
                className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
            md:space-y-5"
              >
                <h1 class="text-4xl font-extrabold dark:text-black">
                  "Roommates Mattress"
                  <br />
                  <small class="ml-2 font-bold text-black-500 dark:text-black-400">
                    Navigating the World to Sleep Comfort{" "}
                  </small>
                </h1>

                {/* <a className="text-3xl  leading-none lg:text-5xl xl:text-5xl">
                  Roommates Mattresses - Navigating the World of Sleep Comfort
                </a> */}
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="block">
                <img
                  // src="https://www.sleepspa.in/wp-content/uploads/2019/10/pocket-spring-hotel-mattress-400x400-1.jpg"
                  src={front}
                  className="object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
              <img
                // src="https://blog.woodenstreet.com/images/data/image_upload/1670406726Bannerfinal1.jpg"
                // src={orthopedic}
                src={ortho}
                className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"
              />
              <a className="text-lg font-bold sm:text-xl md:text-2xl">
                Orthopedic Mattress
              </a>
              <p className="text-sm text-black">
                Roommate Orthopedic Mattress is designed to provide exceptional
                support and comfort for those seeking relief from back pain or
                looking for optimal spinal alignment during sleep.
              </p>
              <Link
                to="/Mattresses/orthopedicMattress"
                href="#_"
                class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-yellow-400 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-200 group"
              >
                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-yellow-400 group-hover:h-full"></span>
                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    class="w-5 h-5 text-black-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    class="w-5 h-5 text-black-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="relative w-full text-left transition-colors text-black duration-200 ease-in-out group-hover:text-white">
                  Know More
                </span>
              </Link>
            </div>
            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
              <img
                // src="https://sc02.alicdn.com/kf/HTB1WouARAvoK1RjSZFDq6xY3pXaf/200251253/HTB1WouARAvoK1RjSZFDq6xY3pXaf.jpg"
                src={lux}
                className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"
              />
              <a className="text-lg font-bold sm:text-xl md:text-2xl">
                Luxury Comfort Mattress
              </a>
              <p className="text-sm text-black">
                This premium mattress is meticulously crafted to provide a
                lavish sleep experience that you deserve. Its plush yet
                supportive layers cradle your body in a cloud-like embrace,
                relieving pressure points.{" "}
              </p>
              <Link
                to="/Mattresses/luxuryComfortMattress"
                class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-yellow-400 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
              >
                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-yellow-400 group-hover:h-full"></span>
                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    class="w-5 h-5 text-black-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    class="w-5 h-5 text-black-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="relative text-black w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  Know More
                </span>
              </Link>
            </div>
            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
              <img
                // src="https://images-cdn.ubuy.co.in/63427277a6e84a714a462508-headboard-cushion-king-size-bed.jpg"
                src={back}
                className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"
              />
              <a className="text-lg font-bold sm:text-xl md:text-2xl">
                Backrest Mattress
              </a>
              <p className="text-sm text-black">
                Designed with a unique backrest feature, this mattress provides
                targeted support to your back and spine, ensuring proper
                alignment and alleviating discomfort.
              </p>
              <Link
                to="/Mattresses/backrestMattress"
                href="#_"
                class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-yellow-400 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-200 group"
              >
                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-yellow-400 group-hover:h-full"></span>
                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    class="w-5 h-5 text-blacks-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    class="w-5 h-5 text-black-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="relative w-full text-left transition-colors text-black duration-200 ease-in-out group-hover:text-white">
                  Know More
                </span>
              </Link>
            </div>
            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
              <img
                // src="https://img3.exportersindia.com/product_images/bc-full/2022/3/9405119/dr-back-impression-orthopaedic-mattress-1648547428-6047342.png"
                src={imp}
                className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"
              />
              <a className="text-lg font-bold sm:text-xl md:text-2xl">
                Impression Mattress
              </a>
              <p className="text-sm text-black">
                Perfect balance of comfort and support with the Roommate
                Impression Mattress. Designed to leave a lasting impression,
                this mattress features a unique impression foam layer that
                contours to your body.
              </p>
              <Link
                to="/Mattresses/impressionMattress"
                href="#_"
                class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-yellow-400 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-200 group"
              >
                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-yellow-400 group-hover:h-full"></span>
                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    class="w-5 h-5 text-black-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    class="w-5 h-5 text-black-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="relative w-full text-left transition-colors text-black duration-200 ease-in-out group-hover:text-white">
                  Know More
                </span>
              </Link>
            </div>
            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
              <img
                src="https://blog.woodenstreet.com/images/data/image_upload/1670406726Bannerfinal1.jpg"
                className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"
              />
              <a className="text-lg font-bold sm:text-xl md:text-2xl">
                Customize your Mattress
              </a>
              <p className="text-sm text-black">
                At Roommate, we understand that everyone has unique sleep
                preferences. That's why we offer the option to customize your
                mattress to suit your individual needs. With Roommate, you can
                create a mattress that caters to your specific sleep
                requirements.
              </p>
              <Link
                to="/ProductDes"
                href="#_"
                class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-yellow-400 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-200 group"
              >
                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-yellow-400 group-hover:h-full"></span>
                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    class="w-5 h-5 text-black-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    class="w-5 h-5 text-black-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="relative w-full text-left transition-colors text-black duration-200 ease-in-out group-hover:text-white">
                  Know More
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mattresses;
