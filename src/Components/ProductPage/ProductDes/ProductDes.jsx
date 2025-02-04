import React, { useState } from "react";
import "./ProductDes.css";
// import { comfortlayers } from "./ProductDesData";
// import prodata from "./ProductDesData";
import Slider from "@mui/material/Slider";

function ProductDes() {
  const [rate, setRate] = useState(0);
  const [dimension, setDimension] = useState("Enter Dimension");
  const [thickness, setThickness] = useState("Enter Thickness");
  const [baseLayer, setBaseLayer] = useState("Rebounded");
  const [comfortLayer, setComfortLayer] = useState("Enter Comfort Layer");
  const [firmness, setFirmness] = useState("Enter Firmness Level");
  const submitDimension = (e) => {
    setDimension(e.target.value);
  };
  const submitThickness = (e) => {
    setThickness(e.target.value);
  };
  const submitBaseLayer = (e) => {
    setBaseLayer(e.target.value);
  };
  const submitComfortLayer = (e) => {
    setComfortLayer(e.target.value);
  };
  const submitFirmnessLevel = (e) => {
    setFirmness(e.target.value);
  };

  const prodata = [
    {
      id: 0,
      url: "https://wakefitdev.gumlet.io/img/mattresslifestyle/ortho_01.jpg?w=1700",
    },
    {
      id: 1,
      url: "https://www.wakefit.co/blog/wp-content/uploads/2020/10/Dreamy-bubbles.jpg",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1635594202056-9ea3b497e5c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fG1hdHRyZXNzJTIwdG9wcGVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      url: "https://evolveindia.co/wp-content/uploads/2021/11/Bed-back-wall-designed-using-textured-liquid-metal-panels.jpg",
    },
  ];

  const [Image, SetImage] = useState(prodata[0]);

  function valuetext(x) {
    return `${x}°C`;
  }

  return (
    <div>
      <section className="pt-20 pb-2 font-poppins bg-white relative ">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="flex flex-wrap mb-24 -mx-4">
            <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
              <div className="sticky top-0 overflow-hidden ">
                <div className="relative mt-6 mb-6 lg:mb-10 ">
                  <img
                    className="object-cover w-full lg:h-1/2"
                    src={Image.url}
                    alt=""
                  />
                  {/* <div className="main-slider">
                    <CarouselProvider
                      naturalSlideWidth={45}
                      naturalSlideHeight={45}
                      totalSlides={prodata.length}
                      interval={5000}
                      isPlaying={true}
                      infinite={true}
                    >
                      <Slider>
                        {prodata.map((crnt, index) => (
                          <Slide index={index}>
                            {" "}
                            <img
                              src={crnt.url}
                              alt="Img"
                              // style={{ width: "100%", height: "130%" }}
                            />
                          </Slide>
                        ))}
                      </Slider>
                    </CarouselProvider>
                  </div> */}
                </div>
                <div className="flex-wrap flex -mx-2 ">
                  {prodata.map((crnt, i) => {
                    return (
                      <div className="w-1/2 p-2 sm:w-1/4">
                        <div
                          className="block border border-transparent hover:border-blue-400"
                          href="#"
                        >
                          <img
                            className="object-cover w-full lg:h-32"
                            src={crnt.url}
                            key={i}
                            onClick={() => SetImage(crnt)}
                            alt="Images"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="px-6 pb-6 mt-10 border-t border-gray-300 :border-gray-400 ">
                  <div className="flex items-center justify-center mt-7"></div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="lg:pl-20">
                <div className="mb-6 ">
                  <span className="text-yellow-500 :text-yellow-200">
                    Your Space
                  </span>
                  <h2 className="max-w-xl mt-2 mb-4 text-3xl font-bold md:text-3xl font-heading :text-gray-300">
                    Customize your Mattress
                  </h2>
                </div>
                <div className="">
                  <p className=" product-des-title mb-4 text-lg font-semibold :text-gray-400">
                    Choose your Comfort Layer
                  </p>
                  <select
                    id="small"
                    onChange={submitComfortLayer}
                    value={comfortLayer}
                    class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                  >
                    <option selected>Comfort Layers</option>
                    <option value="Rebonded">Rebonded</option>
                    <option value="Ortho Coir">Ortho Coir</option>
                    <option value="Pocket Spring">Pocket Spring</option>
                    {/* <option value={comfortlayers[0]}>{comfortlayers[0]}</option>
                    <option value={comfortlayers[1]}>{comfortlayers[1]}</option>
                    <option value={comfortlayers[2]}>{comfortlayers[2]}</option> */}
                  </select>
                </div>
                <div className="mt-7">
                  <p className="mb-2 text-lg font-semibold :text-gray-400">
                    Choose your Base Layer
                  </p>
                  <select
                    id="small"
                    onChange={submitBaseLayer}
                    value={baseLayer}
                    class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                  >
                    <option selected>Base Layers</option>
                    <option value="Rebonded">Rebonded</option>
                    <option value="Ortho Coir">Ortho Coir</option>
                    <option value="Pocket Spring">Pocket Spring</option>
                  </select>
                </div>
                <div className="mt-7">
                  <p className="mb-2 text-lg font-semibold :text-gray-400">
                    Choose your Dimension
                  </p>
                  <select
                    onChange={submitDimension}
                    value={dimension}
                    id="small"
                    class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                  >
                    <option selected value="72'' × 30''">
                      72'' × 30''
                    </option>
                    <option value="72'' × 35''">72'' x 35''</option>
                    <option value="72'' × 36''">72'' x 36''</option>
                    <option value="72'' × 48''">72'' x 48''</option>
                    <option value="72'' × 60''">72'' x 60''</option>
                    <option value="72'' x 60''">72'' x 66''</option>
                    <option value="72'' x 72''">72'' x 72''</option>
                    <option value="75'' x 30''">75'' x 30''</option>
                    <option value="75'' x 35''">75'' x 35''</option>
                    <option value="75'' x 36''">75'' x 36''</option>
                    <option value="75'' x 48''">75'' x 48''</option>
                    <option value="75'' x 60''">75'' x 60''</option>
                    <option value="75'' x 66''">75'' x 66''</option>
                    <option value="75'' x 72''">75'' x 72''</option>
                    <option value="78'' x 30''">78'' x 30''</option>
                    <option value="78'' x 35''">78'' x 35''</option>
                    <option value="78'' x 36''">78'' x 36''</option>
                    <option value="78'' x 48''">78'' x 48''</option>
                    <option value="78'' x 60''">78'' x 60''</option>
                    <option value="78'' x 66''">78'' x 66''</option>
                    <option value="78'' x 72''">78'' x 72''</option>
                  </select>
                </div>
                <div className="mt-7">
                  <p className="mb-2 text-lg font-semibold :text-gray-400">
                    Choose your Thikness
                  </p>
                  <select
                    onChange={submitThickness}
                    value={thickness}
                    id="small"
                    className="lowercase block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                  >
                    <option className="lowercase" value="2 inch" selected>
                      2 inch
                    </option>
                    <option className="lowercase" value="3 inch">
                      3 inch
                    </option>
                    <option className="lowercase" value="4 inch">
                      4 inch
                    </option>
                    <option className="lowercase" value="5 inch">
                      5 inch
                    </option>
                    <option className="lowercase" value="6 inch">
                      6 inch
                    </option>
                    <option className="lowercase" value="7 inch">
                      7 inch
                    </option>
                    <option className="lowercase" value="8 inch">
                      8 inch
                    </option>
                    <option className="lowercase" value="9 inch">
                      9 inch
                    </option>
                    <option className="lowercase" value="10 inch">
                      10 inch
                    </option>
                    <option className="lowercase" value="11 inch">
                      11 inch
                    </option>
                    <option className="lowercase" value="12 inch">
                      12 inch
                    </option>
                    <option className="lowercase" value="13 inch">
                      13 inch
                    </option>
                    <option className="lowercase" value="14 inch">
                      14 inch
                    </option>
                  </select>
                </div>
                <div className="mt-7">
                  <p className="mb-2 text-lg font-semibold :text-gray-400">
                    Choose Firmness Scale
                  </p>
                  <div>
                    <div className="hard-soft text-black">
                      <h4 className="text-black">Hardness</h4>

                      <h4 className="text-black">Softness</h4>
                    </div>

                    <Slider
                      onChange={submitFirmnessLevel}
                      className="color-black"
                      aria-label="Small steps"
                      defaultValue={0}
                      getAriaValueText={valuetext}
                      step={1}
                      marks
                      min={1}
                      max={10}
                      valueLabelDisplay="auto"
                    />
                  </div>
                </div>
                <div className="mt-7 ">
                  <a
                    target="_blank"
                    href={`https://wa.me/9373102943?text=Hi%20there%2C%0A%0AI%20would%20like%20to%20purchase%20from%20your%20store.%20Please%20find%20the%20details%20below%3A%0A%0AComfort%20Layer%3A%20${comfortLayer}%0ABase%20Layer%3A%20${baseLayer}%0AThickness%3A%20${thickness}%0ADimension%3A%20${dimension}%0AFirmness%3A%20${firmness}%0A%0AThank%20you%20for%20your%20assistance.%20Please%20let%20me%20know%20if%20you%20require%20any%20additional%20information.%0A%0ABest%20regards%2C%0A[Your Name]
`}
                  >
                    <button className="w-full px-4 py-2 font-bold text-black hover:bg-yellow-500 hover:text-white bg-yellow-300 focus:ring-4 focus:ring-yellow-300">
                      Continue
                    </button>
                  </a>
                </div>
                <div className="flex items-center mt-7 "></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDes;
