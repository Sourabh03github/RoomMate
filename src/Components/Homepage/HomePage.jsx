import React from "react";
import { BrowserRouter } from "react-router-dom";
import ContactUs from "./ContactUs/ContactUs";
import Counter from "./Counter/Counter";
import FandQ_2 from "./FNQ-2/FandQ_2";
import FandQ from "./FNQ/FandQ";
import Footer from "./Footer/Footer";
import FrontImage from "./FrontImage/FrontImage";
import Header from "./Header/Header";
import ProductCategory from "./ProductCategory/ProductCategory";
import Review from "./Reviews/Review";
import SeeMore from "./SeeMore/SeeMore";
import CarouselComponent from "./Carousel/CarouselComponent";
import Blogs from "./Blogs";
import Instagram from "./Instagram";
import GReviewKondwa from "./Reviews/GReviewKondwa";

function HomePage() {
  return (
    <div>
      <CarouselComponent />
      {/* <FrontImage /> */}
      <ProductCategory />
      <Counter />
      {/* <Review /> */}
      <GReviewKondwa />
      <Blogs />
      <ContactUs />
      <FandQ />
      {/* <Instagram /> */}
      <SeeMore />
    </div>
  );
}

export default HomePage;
