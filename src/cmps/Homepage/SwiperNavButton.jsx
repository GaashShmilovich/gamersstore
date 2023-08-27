import React from "react";
import { useSwiper } from "swiper/react";

export function SwiperNavButton() {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btn">
      <button onClick={() => swiper.slideNext()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 0L9.885 2.115L18.255 10.5H0V13.5H18.255L9.885 21.885L12 24L24 12L12 0Z"
            fill="url(#paint0_linear_233_343)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_233_343"
              x1="0"
              y1="0"
              x2="0"
              y2="24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6F5EE2" />
              <stop offset="1" stopColor="#6D5ED2" />
            </linearGradient>
          </defs>
        </svg>
      </button>
    </div>
  );
}
