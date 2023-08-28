import React, { useState, useEffect } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButton } from "./SwiperNavButton";
import { AiFillStar } from "react-icons/ai";
import "swiper/swiper-bundle.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

export function WhatsNewSlider() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cachedData = localStorage.getItem("whatsNewSliderData");

    if (cachedData) {
      setData(JSON.parse(cachedData));
      setIsLoading(false);
    } else {
      fetch(
        "https://api.rawg.io/api/games?key=a7c3746f05fb44148003d3f6d11b26e5"
      )
        .then((response) => response.json())
        .then((fetchedData) => {
          setData(fetchedData.results);
          setIsLoading(false);
          localStorage.setItem(
            "whatsNewSliderData",
            JSON.stringify(fetchedData.results)
          );
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setIsLoading(false);
        });
    }
  }, []);

  // Function to generate stars based on rating
  const generateStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<AiFillStar key={i} />);
    }
    return stars;
  };

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
          slidesPerView={1.75}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} style={{ height: "250px" }}>
              <LazyLoadImage
                alt={item.name}
                src={item.background_image}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="info">
                <h1>{item.name}</h1>
                <h2>{item.genres[0].name}</h2>
                <h3>{generateStars(item.rating_top)}</h3>
              </div>
            </SwiperSlide>
          ))}
          <SwiperNavButton />
        </Swiper>
      </div>
    </>
  );
}
