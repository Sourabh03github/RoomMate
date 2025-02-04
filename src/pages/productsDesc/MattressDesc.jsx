import "./mattressDesc.css";
import React, { useState, useEffect } from "react";
import { urlFor, client } from "../../client";
import { PortableText } from "@portabletext/react";

import { useParams } from "react-router-dom";
import { RichTextComponent } from "../../Components/RichTextComponent";

const MattressDesc = () => {
  const [dimension, setDimension] = useState("Enter Dimension");
  const [thickness, setThickness] = useState("Enter Thickness");
  const [baseLayer, setBaseLayer] = useState("Rebounded");
  const submitDimension = (e) => {
    setDimension(e.target.value);
  };
  const submitThickness = (e) => {
    setThickness(e.target.value);
  };
  const submitBaseLayer = (e) => {
    setBaseLayer(e.target.value);
  };
  const { product_name } = useParams();
  const { product_img } = useParams();
  const { product_category } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const query = `*[slug.current == '${product_name}'][0]`;

    client.fetch(query).then((data) => {
      setProduct(data);
    });
  }, []);

  const ImgArr = JSON.parse(decodeURIComponent([product_img]));

  const [Image, SetImage] = useState(urlFor(ImgArr[0]).url());

  return (
    <div>
      <section className="pt-20 pb-2 font-poppins relative ">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="flex flex-wrap mb-24 -mx-4">
            <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
              <div className="sticky top-0 overflow-hidden ">
                <div className="relative mt-6 mb-6 lg:mb-10 ">
                  {/* <a
                    className="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2"
                    href="#"
                  ></a> */}
                  {/* <img
                    className="object-cover w-full lg:h-1/2"
                    src={urlFor(obj).url()}
                    alt=""
                  /> */}
                  <img
                    className="object-cover w-full lg:h-1/2"
                    src={Image}
                    alt=""
                  />
                  {/* <a
                    className="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2"
                    href="#"
                  ></a> */}
                </div>
                {/* 4images start here  */}
                <div className="flex flex-wrap -mx-2">
                  {ImgArr.map((crnt, i) => {
                    return (
                      <div className="w-1/2 p-2 sm:w-1/4">
                        <div
                          className="block border border-transparent hover:border-blue-400"
                          href="#"
                        >
                          <img
                            className="object-cover w-full lg:h-32"
                            src={urlFor(crnt).url()}
                            key={i}
                            onClick={() => SetImage(urlFor(crnt).url())}
                            alt="Images"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* Ends here */}
                <div className="px-6 pb-6 mt-10 border-t border-gray-300 dark:border-gray-400 ">
                  <div className="flex items-center justify-center mt-7"></div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="lg:pl-20">
                <div className="mb-6 ">
                  <span className="text-yellow-500 capitalize dark:text-yellow-500">
                    {product_category}
                  </span>
                  <h2 className="max-w-xl mt-2 text-3xl font-bold md:text-3xl font-heading">
                    {product.name}
                  </h2>
                </div>
                <p className="pro-des text-black">
                  <PortableText
                    // Pass in block content straight from Sanity.io
                    value={product.body}
                    components={RichTextComponent}
                  />
                </p>
                <div className="">
                  <p className=" product-des-title mb-2 text-lg font-semibold dark:text-gray-400">
                    Comfort Layer
                  </p>
                  <select
                    id="small"
                    class="block appearance-none text-black	 w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>{product.comfortLayer}</option>
                  </select>
                </div>

                <div className="mt-7">
                  <p className="mb-2 text-lg font-semibold dark:text-gray-400">
                    Base Layer
                  </p>
                  <select
                    onChange={submitBaseLayer}
                    value={baseLayer}
                    id="small"
                    class="block w-full appearance-none	 p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value={product.baseLayer} selected>
                      {product.baseLayer}
                    </option>
                  </select>
                </div>
                <div className="mt-7">
                  <p className="mb-2 text-lg font-semibold dark:text-gray-400">
                    Choose your Dimension
                  </p>
                  <select
                    id="small"
                    value={dimension}
                    onChange={submitDimension}
                    class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  <p className="mb-2 text-lg font-semibold dark:text-gray-400">
                    Choose your Thikness
                  </p>
                  <select
                    value={thickness}
                    onChange={submitThickness}
                    id="small"
                    className="lowercase block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                <div className="mt-7 ">
                  <a
                    target="_blank"
                    href={`https://wa.me/9373102943?text=Hi%20there%2C%0A%0AI%20would%20like%20to%20purchase%20from%20your%20store.%20Please%20find%20the%20details%20below%3A%0A%0AProduct%20Name%3A%20${product.name}%0AComfort%20Layer%3A%20${product.comfortLayer}%0ABase%20Layer%3A%20${baseLayer}%0AThickness%3A%20${thickness}%0ADimension%3A%20${dimension}%0A%0AThank%20you%20for%20your%20assistance.%20Please%20let%20me%20know%20if%20you%20require%20any%20additional%20information.%0A%0ABest%20regards%2C%0A[Your Name]
`}
                  >
                    <button className="w-full px-4 mt-8 py-2 font-bold text-black hover:bg-yellow-500 hover:text-white bg-yellow-300 lg:w-96 ">
                      Buy Now
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
};

export default MattressDesc;
