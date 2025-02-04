import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function GReviewKondwa() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
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
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-auto mx-5 my-12 md:mx-12 md:my-24 flex flex-col md:gap-3 ">
      <p className="mb-4 xl:text-4xl text-3xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-yellow-200 to-yellow-400 transition-all ease-in-out duration-100">
        Review - Kondwa Outlet
      </p>
      <iframe
        src="https://widgets.sociablekit.com/google-reviews/iframe/25418581"
        frameborder="0"
        width="100%"
        height="500"
      ></iframe>

      <p className="my-4 xl:text-4xl text-3xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-yellow-200 to-yellow-5 transition-all ease-in-out duration-100">
        Review - Factory Outlet
      </p>
      <iframe
        src="https://widgets.sociablekit.com/google-reviews/iframe/25418582"
        frameborder="0"
        width="100%"
        height="500"
      ></iframe>
    </div>
  );
}

export default GReviewKondwa;
