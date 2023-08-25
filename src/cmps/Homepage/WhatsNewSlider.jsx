import React, { useState, useEffect } from "react";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButton } from "./SwiperNavButton";
import { AiFillStar } from "react-icons/ai";

import "swiper/swiper-bundle.css";

export function WhatsNewSlider() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.rawg.io/api/games?key=a7c3746f05fb44148003d3f6d11b26e5")
      .then((response) => response.json())
      .then((fetchedData) => {
        setData(fetchedData.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="whats-new">
        <h1>What's New</h1>
      </div>
      <div className="image-container">
        <Swiper
          modules={[Navigation]}
          spaceBetween={28}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} style={{ height: "250px" }}>
              <img
                src={item.background_image}
                alt={item.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="info">
                <h1>{item.name}</h1>
                <h2>
                  Rating:{item.rating_top}
                  <AiFillStar />
                </h2>
              </div>
            </SwiperSlide>
          ))}
          <SwiperNavButton />
        </Swiper>
      </div>
    </>
  );
}
