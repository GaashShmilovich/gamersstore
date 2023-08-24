import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import "swiper/scss";
import "swiper/css/bundle";

export function WhatsNew() {
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
    <Swiper className="slider-container">
      {data.map((data, i) => (
        <SwiperSlide key={i}>
          <img key={data.id} src={data.background_image} alt={data.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
