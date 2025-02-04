import "./mattressDesc.css";
import React, { useState, useEffect } from "react";
import { urlFor, client } from "../../client";
import { PortableText } from "@portabletext/react";

import { useParams, useLocation } from "react-router-dom";
import { RichTextComponent } from "../../Components/RichTextComponent";

const MattressDesc = () => {
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
      <section className="pt-20 pb-2 font-poppins relative">
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
                {/* For the horizontal images */}

                <div className="flex flex-wrap -mx-2 ">
                  {ImgArr?.map((crnt, i) => {
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
                {/* finishes here */}
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
                <p className="pro-des text-white">
                  <PortableText
                    // Pass in block content straight from Sanity.io
                    value={product.body}
                    components={RichTextComponent}
                  />
                </p>
                <a
                  target="_blank"
                  href={`https://wa.me/9373102943?text=Hi%20there%2C%0A%0AI%20would%20like%20to%20purchase%20from%20your%20store.%20Please%20find%20the%20details%20below%3A%0A%0AProduct%20Name%3A%20${product.name}%0A%0AThank%20you%20for%20your%20assistance.%20Please%20let%20me%20know%20if%20you%20require%20any%20additional%20information.%0A%0ABest%20regards%2C%0A[Your Name]
`}
                >
                  <button className="w-full px-4 mt-8 py-2 font-bold bg-yellow-300 text-black hover:bg-yellow-500 hover:text-white  focus:ring-4 focus:ring-yellow-300">
                    Buy Now
                  </button>
                </a>
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
