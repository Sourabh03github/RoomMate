import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import logo from "../../../asset/Roommates_Updated.png";
// import logo from "../../../asset/favicon.png";
import "./Header.css";
import { Link } from "react-router-dom";
import MattressesDropdown from "./MattressesDropdown";
import BedAccessoriesDropdown from "./BedAccessoriesDropdown";

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  className="w-6 h-6"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
  />
</svg>;

export default function Navbar() {
  const check = () => {
    location.reload(true);
    forceUpdate();
  };
  return (
    <div className="relative z-10">
      <div className="mx-auto">
        <div className="relative">
          <Menu>
            <div className="relative ">
              <nav
                className="relative h-24 flex items-center justify-between max-md:mb-10"
                aria-label="Global"
              >
                <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    <Link to="/">
                      <img
                        className="h-10 w-auto ml-10 sm:h-20 sm:w-auto"
                        src={logo}
                        alt="Comapany logo"
                      />
                    </Link>
                    <div className="flex items-center md:hidden">
                      <Menu.Button className="inline-flex items-center justify-center rounded-md  p-2 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <svg
                          className="h-8 w-8"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                          />
                        </svg>

                        {/* <MenuIcon  /> */}
                      </Menu.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden  md:ml-10 md:flex md:flex-row md:items-center md:justify-between ">
                  <div className="flex mx-10 flex-row items-center space-x-8">
                    <Link
                      to="/"
                      className="block p-2 text-black  text-lg rounded md:bg-transparent hover:bg-yellow-400 hover:text-white"
                      aria-current="page"
                    >
                      Home
                    </Link>
                    <MattressesDropdown />
                    <BedAccessoriesDropdown />
                    <Link
                      to="/BeddingAccessories/foams"
                      onClick={check}
                      className="block p-2 text-black  text-lg rounded md:bg-transparent hover:bg-yellow-400 hover:text-white"
                      aria-current="page"
                    >
                      Foams
                    </Link>
                    <Link
                      to="/BeddingAccessories/loungers"
                      onClick={check}
                      className="block p-2 text-black  text-lg rounded md:bg-transparent hover:bg-yellow-400 hover:text-white"
                      aria-current="page"
                    >
                      Loungers
                    </Link>
                    <Link
                      to="/contact-dealer"
                      className="block p-2 text-black text-lg rounded hover:bg-yellow-400 hover:text-white "
                      aria-current="page"
                    >
                      Contact Dealers
                    </Link>

                    <Link
                      to="/blogs"
                      class="block p-2 text-black text-lg rounded hover:bg-yellow-400 hover:text-white "
                      // class="block py-2 pl-3 pr-4 text-black text-lg  rounded md:bg-transparent md:hover:text-textColorYellow md:p-0 "
                      aria-current="page"
                    >
                      Blogs
                    </Link>
                    <Link
                      to="/AboutUs"
                      className="block p-2 text-black text-lg rounded hover:bg-yellow-400 hover:text-white"
                      aria-current="page"
                    >
                      About Us
                    </Link>

                    <Link
                      to="https://warranty.roommatemattress.com/"
                      className="block p-2 text-black text-lg rounded hover:bg-yellow-400 hover:text-white"
                      aria-current="page"
                    >
                      Claim Warranty
                    </Link>
                  </div>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="-translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="-translate-x-0"
              leaveTo="translate-x-full"
            >
              <Menu.Items className="absolute top-0 right-0 w-[60%] md:hidden bg-white">
                <div className="overflow-hidden rounded-l  shadow-md ring-1">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      {/* <img className="h-8 mr-3 sm:h-10" src={logo} alt="" /> */}
                    </div>
                    <div className="-mr-2">
                      <Menu.Button className="inline-flex items-center justify-center rounded-md p-2hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-8 w-8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </Menu.Button>
                    </div>
                  </div>
                  <div className="flex flex-col px-2 pt-2 pb-3">
                    <div className="flex flex-col px-2 pt-2 pb-2 space-y-5">
                      <Link
                        to="/"
                        class="block py-2 pl-3 pr-4 text-black  rounded  md:hover:text-textColorYellow md:p-0"
                        aria-current="page"
                      >
                        Home
                      </Link>
                      <MattressesDropdown />
                      <BedAccessoriesDropdown />
                      <Link
                        to="/BeddingAccessories/foams"
                        onClick={check}
                        class="block py-2 pl-3 pr-4 text-black  rounded  md:hover:text-textColorYellow md:p-0"
                        aria-current="page"
                      >
                        Foams
                      </Link>
                      <Link
                        to="/BeddingAccessories/loungers"
                        onClick={check}
                        class="block py-2 pl-3 pr-4 text-black  rounded  md:hover:text-textColorYellow md:p-0"
                        aria-current="page"
                      >
                        Loungers
                      </Link>
                      <Link
                        to="/contact-dealer"
                        class="block py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:hover:text-textColorYellow md:p-0 "
                        aria-current="page"
                      >
                        Contact Dealers
                      </Link>

                      <Link
                        to="/blogs"
                        class="block py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:hover:text-textColorYellow md:p-0 "
                        aria-current="page"
                      >
                        Blogs
                      </Link>
                      <Link
                        to="/AboutUs"
                        class="block py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:hover:text-textColorYellow md:p-0 "
                        aria-current="page"
                      >
                        About Us
                      </Link>
                      <Link
                        to="https://warranty.roommatemattress.com/"
                        class="block py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:hover:text-textColorYellow md:p-0 "
                        aria-current="page"
                      >
                        Claim Warranty
                      </Link>
                    </div>
                  </div>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
}
