import React, { useState, useEffect } from "react";
import { urlFor, client } from "../../client";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const BeddingAccessoriesCards = () => {
  const { product_category } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const query = `*[_type == '${product_category}']`;

    client.fetch(query).then((data) => {
      setProduct(data);
    });
  }, []);

  return (
    <div className="g-white flex flex-row gap-x-8 mx-4 max-[640px]:flex max-[640px]:flex-col">
      {product.map((item, index) => (
        <div id={index} className="flex justify-center flex-wrap w-full">
          <div className="max-w-2xl my-32 max-[640px]:my-16">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm ">
              <a href="#">
                {console.log(
                  "cards",
                  urlFor(item.mainImage).options.source.asset._ref
                )}
                <img
                  className="rounded-t-lg h-60"
                  src={urlFor(item.mainImage).url()}
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mattr-card-tittle text-gray-900 font-bold text-xl tracking-tight mb-2">
                    {item.name}
                  </h5>
                </a>
                <p className="mattr-card font-normal text-gray-700 mb-3 text-gray-400">
                  {item.description}
                </p>

                <Link
                  to={`/BeddingAccessories/${product_category}/${encodeURIComponent(
                    JSON.stringify([
                      item.mainImage,
                      item.secondImage,
                      item.thirdImage,
                      item.forthImage,
                    ])
                  )}/${item.slug.current}`}
                  className=" bg-yellow-300 text-black hover:bg-yellow-500 hover:text-white focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  :bg-blue-600 :hover:bg-blue-700 :focus:ring-blue-800"
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
      ))}
    </div>
  );
};

export default BeddingAccessoriesCards;
