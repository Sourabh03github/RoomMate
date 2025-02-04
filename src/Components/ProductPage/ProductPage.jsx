import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Footer from "../Homepage/Footer/Footer";
import Header from "../Homepage/Header/Header";
import ProductCards from "./ProductCards/ProductCards";
import "./ProductPage.css";

function ProductPage() {
  return (
    <div>
      <div className="product-page">
        <div class="nine">
          <h1>
            RoomMates Mattress<span>Our Premium Products</span>
          </h1>
        </div>{" "}
 
        <section className="card">
          <div className="text-content">
            <h3>PILLOWS</h3>
            <p>
              Looking for a comfortable and supportive pillow? Our pillow is the
              perfect choice for a good night's sleep! Made with high-quality
              materials, our pillow offers superior comfort and support for your
              head and neck.
            </p>
            <Link to="/BeddingAccessories/pillow">Buy Now</Link>
          </div>
          <div className="visual">
            <img
              src="https://sleepycat.in/wp-content/uploads/2019/09/Soft-Touch-Memory-Foam-Pillow-04.jpg"
              alt=""
            />
          </div>
        </section>
        <section className="card">
          <div className="text-content">
            <h3>QUILT</h3>
            <p>
              Get ready to snuggle up in comfort and style with our high-quality
              quilts! Made with the finest materials and attention to detail,
              our quilts offer superior warmth and coziness. Each quilt is
              crafted with a unique and beautiful design, ranging from classic
              and traditional to modern and trendy
            </p>
            <Link to="/BeddingAccessories/quilt">Buy Now</Link>
          </div>
          <div className="visual">
            <img
              src="https://cdni.llbean.net/is/image/wim/511088_668_41?hei=1095&wid=950&resMode=sharp2&defaultImage=llbprod/A0211793_2"
              alt=""
            />
          </div>
        </section>
        {/* <section className="card">
          <div className="text-content">
            <h3>LOUNGERS</h3>
            <p>
              Upgrade your seating experience with our premium sofa foam! Made
              with the highest quality materials, our foam provides superior
              support and comfort for your sofa. Its dense and durable
              construction ensures long-lasting performance, while its soft and
              plush cushioning offers maximum relaxation
            </p>
            <Link to="/BeddingAccessories/loungers">Buy Now</Link>
          </div>
          <div className="visual">
            <img
              src="https://ik.imagekit.io/durian1985/Durian/durian/product/800x800/641031670051646.jpg?tr=w-796,pr-true,f-auto"
              alt=""
            />
          </div>
        </section> */}
        <section className="card l-card">
          <div className="text-content">
            <h3>Toppers</h3>
            <p>
              With Roommate's top-notch mattress toppers, your mattress will
              reach new levels of comfort. To improve your sleep, choose from a
              variety of opulent alternatives in our selection. Our variety of
              toppers, which includes memory foam, latex foam, and fiber-filled
              toppers, is made to add an additional layer of support and
              cushioning to your current mattress.
            </p>
            <Link to="/BeddingAccessories/toppers">Buy Now</Link>
          </div>
          <div className="visual">
            <img
              src="https://images.unsplash.com/photo-1610395762237-c5bf3d6b7836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fG1hdHRyZXNzJTIwdG9wcGVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </section>
        <section className="card l-card">
          <div className="text-content">
            <h3>Protectors</h3>
            <p>
              With Roommate's top-quality mattress coverings, you can safeguard
              your mattress investment. In order to protect your mattress from
              spills, stains, dust mites, and allergies and to help it last
              longer and stay in perfect condition, our selection includes a
              variety of alternatives.
            </p>
            <Link to="/BeddingAccessories/protectors">Buy Now</Link>
          </div>
          <div className="visual">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSprgfqwjhRmeODmw5zWBSWgnsYyYCVNPSPZg&usqp=CAU"
              alt=""
            />
          </div>
        </section>
        <section className="card l-card">
          <div className="text-content">
            <h3>Comforters</h3>
            <p>
              Our comforters are made to keep you warm and cosy all night long,
              whether you want a lightweight blanket for warmer months or a
              comforting, plush comforter for colder months. You can select the
              ideal comforter to complement your sleeping preferences and
              improve your bedding outfit thanks to the diversity of sizes and
              styles available.
            </p>
            <Link to="/BeddingAccessories/comforters">Buy Now</Link>
          </div>
          <div className="visual">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT70uQBiiDlGrGOGKYDO8AK_iDr_TGsxFuSzA&usqp=CAU"
              alt=""
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductPage;
