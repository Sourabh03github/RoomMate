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

  const obj = JSON.parse(decodeURIComponent(product_img));

  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="product-imgs">
          <div className="img-display">
            <div className="img-showcase">
              {console.log("desc", obj)}
              {console.log("desc2")}

              <img
                classNameName="object-cover w-full lg:h-1/2"
                src={urlFor(obj).url()}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="product-content">
          <h2 className="product-title !text-3xl">{product.name}</h2>

          <div className="product-detail">
            <h4>{product_category} </h4>
            <p>
              <PortableText
                // Pass in block content straight from Sanity.io
                value={product.body}
                components={RichTextComponent}
              />
            </p>
          </div>

          <div className="purchase-info">
            <a
              target="_blank"
              href={`https://wa.me/9373102943?text=Hi%20there%2C%0A%0AI%20would%20like%20to%20purchase%20from%20your%20store.%20Please%20find%20the%20details%20below%3A%0A%0AProduct%20Name%3A%20${product.name}%0A%0AThank%20you%20for%20your%20assistance.%20Please%20let%20me%20know%20if%20you%20require%20any%20additional%20information.%0A%0ABest%20regards%2C%0A[Your Name]
`}
            >
              <button classNameName="w-full px-4 mt-8 py-2 font-bold text-black hover:bg-yellow-500 hover:text-white focus:ring-4 focus:ring-yellow-300 lg:w-96 hover:bg-blue-500">
                Buy Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MattressDesc;
