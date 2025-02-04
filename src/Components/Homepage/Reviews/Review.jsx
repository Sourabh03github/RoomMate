import React, { useState, useEffect } from "react";
// import "./Review.css";
import "./Review.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { brandsData } from "./brandsData";

const Review = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="app__container home_testimonial">
      <div className="app__flex-col">
        <div
          className="head-text w-full flex justify-center items-center font-8"
          style={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold" }}
        >
          Hear From Our Customers.
        </div>
        <hr className="hr " />
      </div>
      <div className="home-testimonials_slider">
        <Slider {...settings}>
          {brandsData.map((item, index) => (
            <div class="box" id={index}>
              <div class="content">
                <div class="image">
                  <img src={item.img} alt="" />
                </div>
                <div class="info">
                  <div class="name">{item.name}</div>
                  <div class="job">Customer</div>
                </div>
              </div>
              <i class="fas fa-quote-left quote"></i>
              <p>{item.testimonial}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Review;
