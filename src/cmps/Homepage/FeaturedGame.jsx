import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";

export function FeaturedGame() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cachedData = localStorage.getItem("featuredGameData");

    if (cachedData) {
      setData(JSON.parse(cachedData));
      setIsLoading(false);
    } else {
      fetch(
        "https://api.rawg.io/api/games/41494?key=a7c3746f05fb44148003d3f6d11b26e5&page=2"
      )
        .then((response) => response.json())
        .then((fetchedData) => {
          setData(fetchedData);
          setIsLoading(false);

          // Cache the data in localStorage
          localStorage.setItem("featuredGameData", JSON.stringify(fetchedData));
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

  return (
    <section className="game-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>Featured Game</h1>
          <LazyLoadImage alt={data.name} src={data.background_image} />
          <div className="info">
            <h1>{data.name}</h1>
            <h2>Rating: {generateStars(data.rating_top)}</h2>
          </div>
        </div>
      )}
    </section>
  );
}
