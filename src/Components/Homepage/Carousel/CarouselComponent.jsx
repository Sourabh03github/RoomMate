import React, { useState, useEffect } from "react";

import "./CarouselComponent.css";

import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import { client, urlFor } from "../../../client";

import img_sli from "../../../asset/img.png";
import img_sli1 from "../../../asset/img.png";
import img_sli2 from "../../../asset/img.png";
import img_sli3 from "../../../asset/img.png";
import img_sli4 from "../../../asset/img.png";
import img_sli5 from "../../../asset/img.png";
import img_sli6 from "../../../asset/img.png";
// import Welcome from "../ExplorePlatform/Welcome/Welcome";

// const APIkey = "AIzaSyCW62Nn00V6RCkSvLJ0_i0zSg097Xj30hQ";
// const channelId = "UC4Pc9V7-QjsJZKkUS8I0iqw";
// const result = "100";

// const finalUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=${result}&order=date&key=${API}`;

const CarouselComponent = () => {
  const [homeBanner, setHomeBanner] = useState([]);

  useEffect(() => {
    const query = '*[_type == "homeBanner"] ';

    client.fetch(query).then((data) => {
      setHomeBanner(data);
    });
  }, []);
  // const s = useContext(userContext);

  // const [loader, setLoader] = useState(false);
  // const loaderCSS = css`
  //   position: fixed;
  //   top: 50%;
  //   left: 50%;
  // `;
  // const [youtubeUrl, setyoutubeUrl] = useState([]);

  // async function getVideos() {
  //   console.log();
  //   try {
  // const response = await fetch(finalUrl);
  // const data = await response.json();
  // const data2 = data.items.map((e) => {
  //   return e.id.videoId;
  // });
  // setyoutubeUrl([...data2]);
  // console.log(youtubeUrl);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   getVideos();
  // }, []);

  return (
    <div className="main-slider">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={45}
        totalSlides={homeBanner.length}
        interval={5000}
        isPlaying={true}
        infinite={true}
      >
        <Slider>
          {homeBanner.map((item, index) => (
            <Slide index={index}>
              {" "}
              <img
                src={urlFor(item.bannerImage).url()}
                alt="Img"
                style={{ width: "100%", height: "130%" }}
              />
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </div>
  );
};

export default CarouselComponent;
