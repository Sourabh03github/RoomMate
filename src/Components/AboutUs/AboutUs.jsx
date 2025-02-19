import React from "react";
import img from "./aboutusimg.jpg";
import logo from "../../asset/Roommates_Updated.png";

function AboutUs() {
  return (
    <div>
      <div className="py-11">
        <div className="text-center flex flex-col  px-1 sm:mx-auto sm:max-w-xl">
          <p className="text-black-300 mb-0 ">About</p>
          <h1>Hello</h1>
          <h1 className=" text-3xl mt-2 text-slate-900 text-black-100 sm:text-4xl">
            ROOM<b>MATE</b> MATTRESS
          </h1>
          <p className="text-base text-black-400 sm:text-lg">
            Welcome to Roommate, where we are dedicated to providing you with
            the ultimate sleep experience. We understand the importance of
            quality sleep in maintaining physical health, mental well-being, and
            overall productivity.
          </p>
        </div>
        <div className="grid grid-cols-2 mt-5 gap-y-5 sm:gap-y-0 lg:mx-auto lg:max-w-4xl">
          <div className="col-span-2 sm:col-span-1">
            <img
              className="w-full bg-black-50"
              alt="No alt"
              src={img}
              // src="https://picsum.photos/300"
            />
          </div>
          <div className="col-span-2 px-3 pb-3 border-slate-700 border-black-50 sm:col-span-1 sm:flex sm:flex-col sm:justify-center sm:pl-7 sm:border-t lg:border-r">
            <h1 className="font-semibold text-black-700 tracking-tight text-xl text-black-200 divide-undefined sm:mb-2 md:my-1">
              Commitment to Quality Craftsmanship
            </h1>
            <p className="text-center mt-5 text-black-300">
              At Roommate, we take pride in our commitment to quality
              craftsmanship. We use premium materials and cutting-edge
              manufacturing techniques to create products that are designed to
              last. Our mattresses are carefully crafted with attention to
              detail, ensuring optimal comfort, support, and durability. Our
              toppers, comforters, pillows, and mattress protectors are made
              with the finest materials to provide you with the ultimate sleep
              experience.
            </p>
          </div>
          <div className="mr-2 col-span-2 px-3 pb-3 order-3 border-slate-700 border-black-50 sm:col-span-1 sm:flex sm:flex-col sm:justify-center sm:pl-7 sm:order-none sm:border-b lg:border-l">
            <h1 className="font-semibold text-black-700 tracking-tight text-xl text-black-200 divide-undefined sm:mb-2 md:my-1">
              Expertise in Sleep Health and Well-being
            </h1>
            <p className=" text-center mt-5 text-black-300">
              At Roommate, we believe that sleep health is essential for overall
              well-being. Our team includes sleep health experts and
              professionals who are knowledgeable about sleep science,
              ergonomics, and musculoskeletal health. We are committed to
              providing accurate and helpful information to our customers to
              help them make informed choices for their sleep health.
            </p>
          </div>
          <div className="col-span-2 order-2 sm:col-span-1 sm:order-none">
            <img
              className="w-full bg-black-50"
              alt="No alt"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMm3HVaT-FnFgI1KiUMyqCN5RtYk_8fs_HDw&usqp=CAU"
              // src="https://picsum.photos/300"
            />
          </div>
        </div>
      </div>
      &nbsp;
      <section className="py-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap w-full px-4 pb-5">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="text-3xl title-font mt-1 mb-2 text-black-300 font-bold sm:text-4xl">
                Join Us on Our Mission for Better Sleep !
              </h1>
              <div className="h-1 rounded bg-primary w-14">
                <div className="p-2"></div>
              </div>
            </div>
            <p className="w-full text-lg leading-snug font-light font-body lg:w-1/2">
              Discover the Roommate difference and experience the joy of waking
              up feeling refreshed, rejuvenated, and ready to take on the day.
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="p-4 md:w-1/2 xl:w-1/4">
              <div className="bg-black-50 bg-black-900">
                <a className="" href="#">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-2 xl:mb-0"
                    alt="No alt"
                    src={logo}
                  />
                </a>
                <div className="p-3 rounded-lg ">
                  <h3 className="text-xl font-semibold text-black-200">
                    Roommate Mattress,Pisoli
                  </h3>
                  <a
                    href="https://maps.app.goo.gl/fTGUtEEL7sGTGuXc8?g_st=iw"
                    className="tracking-widest text-xs font-medium title-font hover:text-yellow-500 text-primary mb-2"
                  >
                    Locate
                  </a>
                  <p className="text-base mt-2">
                    We look forward to helping you create your dream sleep
                    environment and providing you with exceptional products and
                    service. Sweet dreams start with Roommate!
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2 xl:w-1/4">
              <div className="bg-black-50 bg-black-900">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-2 xl:mb-0"
                  alt="No alt"
                  src={logo}
                  // src="https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                />
                <div className="p-3 rounded-lg divide-undefined">
                  <h3 className="text-xl font-semibold text-black-200">
                    Roommate Mattress,Malegaon
                  </h3>
                  <a
                    href="https://maps.app.goo.gl/zEaDKTcGBynFD6Cu9?g_st=iw"
                    className="tracking-widest text-xs font-medium title-font hover:text-yellow-500 text-primary mb-2"
                  >
                    Locate
                  </a>
                  <p className="text-base mt-2">
                    We look forward to helping you create your dream sleep
                    environment and providing you with exceptional products and
                    service. Sweet dreams start with Roommate!
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2 xl:w-1/4">
              <div className="bg-black-50 bg-black-900">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-2 xl:mb-0"
                  alt="No alt"
                  src={logo}
                  // src="https://images.unsplash.com/photo-1633783156075-a01661455344?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                />
                <div className="p-3 rounded-lg divide-undefined">
                  <h3 className="text-xl font-semibold text-black-200">
                    Roommate Mattress,Pimpri
                  </h3>
                  <a
                    href="https://maps.app.goo.gl/A9Tcj5KiMc587UsK8?g_st=iw"
                    className="tracking-widest text-xs font-medium title-font hover:text-yellow-500 text-primary mb-2"
                  >
                    Locate
                  </a>
                  <p className="text-base mt-2">
                    We look forward to helping you create your dream sleep
                    environment and providing you with exceptional products and
                    service. Sweet dreams start with Roommate!
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2 xl:w-1/4">
              <div className="bg-black-50 bg-black-900">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-2 xl:mb-0"
                  alt="No alt"
                  src={logo}
                  // src="https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=4FXEdO4szrF-XLQEftqgBg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=325.51865&pitch=0&thumbfov=100"
                  // src="https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                />
                <div className="p-3 rounded-lg divide-undefined">
                  <h3 className="text-xl font-semibold text-black-200">
                    Roommate Mattress, Headoffice
                  </h3>
                  <a
                    href="https://maps.app.goo.gl/fTGUtEEL7sGTGuXc8?g_st=iw"
                    className="tracking-widest text-xs font-medium title-font hover:text-yellow-500  text-primary mb-2"
                  >
                    Locate
                  </a>
                  <p className="text-base mt-2">
                    We look forward to helping you create your dream sleep
                    environment and providing you with exceptional products and
                    service. Sweet dreams start with Roommate!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="">
        <div className="text-center px-3 py-16 max-w-7xl mx-auto">
          <h1 className="font-black tracking-tight text-slate-900 text-3xl text-slate-100 sm:text-4xl">
            We work as a Team!
          </h1>
          <p className="mt-3 text-lg max-w-lg mx-auto">
            Start growing in half the time with an all-in-one website builder -
            no more long hours spent on the boring stuff!
          </p>
          <div className="grid gap-2 mt-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="text-center">
              <img
                className="rounded-full w-60 mx-auto mb-4 bg-blue-100"
                alt="No alt"
                src="https://images.pexels.com/photos/9968247/pexels-photo-9968247.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              />
              <h1 className="text-2xl font-bold text-slate-200 text-slate-800">
                John Doe
              </h1>
              <p className="">CEO  &amp; CTO</p>
            </div>
            <div className="text-center">
              <img
                className="rounded-full w-60 mx-auto mb-4 bg-blue-100"
                alt="No alt"
                src="https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              />
              <h1 className="text-2xl font-bold text-slate-200 text-slate-800">
                Doe John
              </h1>
              <p className="">Marketing Director</p>
            </div>
            <div className="text-center">
              <img
                className="rounded-full w-60 mx-auto mb-4 bg-blue-100"
                alt="No alt"
                src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              />
              <h1 className="text-2xl font-bold text-slate-200 text-slate-800">
                Lita Hayden
              </h1>
              <p className="">Graphic Designer</p>
            </div>
            <div className="text-center">
              <img
                className="rounded-full w-60 mx-auto mb-4 bg-blue-100"
                alt="No alt"
                src="https://images.pexels.com/photos/966067/pexels-photo-966067.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              />
              <h1 className="text-2xl font-bold text-slate-200 text-slate-800">
                William Sendrick
              </h1>
              <p className="">Developer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">
            I could either watch it happen or be a part of it
          </h2>
          <p className="text-base md:text-lg">
            {" "}
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.{" "}
          </p>
        </div>
        <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
          <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:bg-primary-500 hover:border-primary-500 rounded-global">
            <div className="mr-2">
              <span className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-primary-500 sm:w-8 sm:h-8">
                <svg
                  className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-primary-500 sm:w-8 sm:h-8"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  ></polygon>
                </svg>
              </span>
            </div>
            <span className="transition-colors duration-200 group-hover:text-white">
              Change the world by being yourself.
            </span>
          </div>
          <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-primary-500 hover:bg-primary-500 rounded-global">
            <div className="mr-2">
              <span className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-primary-500 sm:w-8 sm:h-8">
                <svg
                  className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-primary-500 sm:w-8 sm:h-8"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  ></polygon>
                </svg>
              </span>
            </div>
            <span className="transition-colors duration-200 group-hover:text-white">
              Die with memories, not dreams.
            </span>
          </div>
          <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-primary-500 hover:bg-primary-500 rounded-global">
            <div className="mr-2">
              <span className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-primary-500 sm:w-8 sm:h-8">
                <svg
                  className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-primary-500 sm:w-8 sm:h-8"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  ></polygon>
                </svg>
              </span>
            </div>
            <span className="transition-colors duration-200 group-hover:text-white">
              What we think, we become.
            </span>
          </div>
          <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-primary-500 hover:bg-primary-500 rounded-global">
            <div className="mr-2">
              <span className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-primary-500 sm:w-8 sm:h-8">
                <svg
                  className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-primary-500 sm:w-8 sm:h-8"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  ></polygon>
                </svg>
              </span>
            </div>
            <span className="transition-colors duration-200 group-hover:text-white">
              Be so good they can’t ignore you.
            </span>
          </div>
          <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-primary-500 hover:bg-primary-500 rounded-global">
            <div className="mr-2">
              <span className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-primary-500 sm:w-8 sm:h-8">
                <svg
                  className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-primary-500 sm:w-8 sm:h-8"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  ></polygon>
                </svg>
              </span>
            </div>
            <span className="transition-colors duration-200 group-hover:text-white">
              Simplicity is the ultimate sophistication.
            </span>
          </div>
          <div className="flex items-center p-2 transition-colors duration-200 border shadow group hover:border-primary-500 hover:bg-primary-500 rounded-global">
            <div className="mr-2">
              <span className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-primary-500 sm:w-8 sm:h-8">
                <svg
                  className="w-6 h-6 transition-colors duration-200 group-hover:text-white text-primary-500 sm:w-8 sm:h-8"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  ></polygon>
                </svg>
              </span>
            </div>
            <span className="transition-colors duration-200 group-hover:text-white">
              Yesterday you said tomorrow. Just do it today.
            </span>
          </div>
        </div>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto sm:text-center lg:max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div className="">
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-secondary text-white">
                {" "}
                New Store
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-slate-900 text-slate-100 sm:text-4xl md:mx-auto">
              Street Food is an amazing
            </h2>
            <p className="text-base md:text-lg">
              {" "}
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.{" "}
            </p>
          </div>
          <div className="mb-4 lg:mb-6">
            <img
              className="object-cover w-full h-56 rounded sm:h-64 md:h-80 lg:h-96 lg:object-contain"
              alt="No alt"
              src="https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"
            />
          </div>
          <p className="max-w-xl mb-4 text-base sm:mx-auto">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud ullamco laboris aliquip ex ea.{" "}
          </p>
          <a
            className="inline-flex items-center font-semibold transition-colors duration-200 text-secondary hover:text-secondary-800"
            href="#"
          >
            <span className=""> Learn more </span>
            <span className="inline-block w-3 ml-2">
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="font-bold text-center mb-4 text-3xl text-slate-900 text-slate-100 md:mb-6 lg:text-4xl">
              Our competitive advantage
            </h2>
            <p className="max-w-screen-md md:text-lg text-center mx-auto">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-16">
            <div className="flex flex-col items-center">
              <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-indigo-500 mb-2 sm:mb-4">
                <span className="w-full h-full text-primary">
                  <svg
                    className="w-full h-full text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-center mb-2">
                Growth
              </h3>
              <p className="text-center mb-2">
                Filler text is dummy text which has no meaning however looks
                very similar to real text.
              </p>
              <a
                className="font-bold transition duration-100 text-primary hover:text-primary-700 active:text-primary-700"
                href="#"
              >
                More
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-indigo-500 mb-2 sm:mb-4">
                <span className="w-full h-full text-primary">
                  <svg
                    className="w-full h-full text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-center mb-2">
                Security
              </h3>
              <p className="text-center mb-2">
                Filler text is dummy text which has no meaning however looks
                very similar to real text.
              </p>
              <a
                className="font-bold transition duration-100 text-primary hover:text-primary-700 active:text-primary-700"
                href="#"
              >
                More
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-indigo-500 mb-2 sm:mb-4">
                <span className="w-full h-full text-primary">
                  <svg
                    className="w-full h-full text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-center mb-2">
                Cloud
              </h3>
              <p className="text-center mb-2">
                Filler text is dummy text which has no meaning however looks
                very similar to real text.
              </p>
              <a
                className="font-bold transition duration-100 text-primary hover:text-primary-700 active:text-primary-700"
                href="#"
              >
                More
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-indigo-500 mb-2 sm:mb-4">
                <span className="w-full h-full text-primary">
                  <svg
                    className="w-full h-full text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-center mb-2">
                Speed
              </h3>
              <p className="text-center mb-2">
                Filler text is dummy text which has no meaning however looks
                very similar to real text.
              </p>
              <a
                className="font-bold transition duration-100 text-primary hover:text-primary-700 active:text-primary-700"
                href="#"
              >
                More
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-indigo-500 mb-2 sm:mb-4">
                <span className="w-full h-full text-primary">
                  <svg
                    className="w-full h-full text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-center mb-2">
                Support
              </h3>
              <p className="text-center mb-2">
                Filler text is dummy text which has no meaning however looks
                very similar to real text.
              </p>
              <a
                className="font-bold transition duration-100 text-primary hover:text-primary-700 active:text-primary-700"
                href="#"
              >
                More
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-indigo-500 mb-2 sm:mb-4">
                <span className="w-full h-full text-primary">
                  <svg
                    className="w-full h-full text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-center mb-2">
                Dark Mode
              </h3>
              <p className="text-center mb-2">
                Filler text is dummy text which has no meaning however looks
                very similar to real text.
              </p>
              <a
                className="font-bold transition duration-100 text-primary hover:text-primary-700 active:text-primary-700"
                href="#"
              >
                More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="mx-auto px-4 max-w-7xl">
          <div className="grid -mx-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="px-4">
              <div className="py-6">
                <h3 className="text-primary-500 text-4xl font-bold lg:mb-4">50+</h3>
                <h5 className="text-black text-lg font-semibold text-white">
                  Reusable Components
                </h5>
                <p className="text-sm">
                  orem ipsum dolor sit amet conse ctetur adipiscing elit
                </p>
              </div>
            </div>
            <div className="px-4">
              <div className="py-6">
                <h3 className="text-primary-500 text-4xl font-bold lg:mb-4">54%</h3>
                <h5 className="text-black text-lg font-semibold text-white">
                  Fully Customizable
                </h5>
                <p className="text-sm">
                  orem ipsum dolor sit amet conse ctetur adip
                </p>
              </div>
            </div>
            <div className="px-4">
              <div className="py-6">
                <h3 className="text-primary-500 text-4xl font-bold lg:mb-4">24</h3>
                <h5 className="text-black text-lg font-semibold text-white">
                  Dark Mode Support
                </h5>
                <p className="text-sm">
                  orem ipsum dolor sit amet conse ctetur adipiscite
                </p>
              </div>
            </div>
            <div className="px-4">
              <div className="py-6">
                <h3 className="text-primary-500 text-4xl font-bold lg:mb-4">
                  100%
                </h3>
                <h5 className="text-black text-lg font-semibold text-white">
                  Export Code
                </h5>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet conse aute irure dol
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default AboutUs;
