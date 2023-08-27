import React, { useState, useEffect } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillStar } from "react-icons/ai";
import "swiper/swiper-bundle.css";

export function PopSlider() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cachedData = localStorage.getItem("popSliderData");

    if (cachedData) {
      setData(JSON.parse(cachedData));
      setIsLoading(false);
    } else {
      fetch(
        "https://api.rawg.io/api/games?key=a7c3746f05fb44148003d3f6d11b26e5&page=3"
      )
        .then((response) => response.json())
        .then((fetchedData) => {
          setData(fetchedData.results);
          setIsLoading(false);
          localStorage.setItem(
            "popSliderData",
            JSON.stringify(fetchedData.results)
          );
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setIsLoading(false);
        });
    }
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  const generateStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<AiFillStar key={i} />);
    }
    return stars;
  };

  return (
    <>
      <div className="pop-wrapper">
        <h1>Popular Games</h1>
      </div>
      <div className="pop-container">
        <Swiper
          modules={[Navigation]}
          spaceBetween={28}
          slidesPerView={2.6}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} style={{ height: "125px" }}>
              <img
                src={item.background_image}
                alt={item.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="info">
                <h1>{item.name}</h1>
                <h2>{generateStars(item.rating_top)}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
