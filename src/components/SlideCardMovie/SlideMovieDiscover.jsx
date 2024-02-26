import "./SlideCardMovie.scss";
import { useEffect, useState } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/grid";

const SlideMovieDiscover = () => {
  const [slideCard, setSlideCard] = useState([]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/upcoming?language=fr&page=1`;
    const api_key = `1e93c6df58e7f3f360d4dbba44795906`;
    fetch(`${url}&api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => setSlideCard(data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      slidesPerView={8}
      spaceBetween={20}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      grabCursor={true}
      navigation={true}
      keyboard={{
        enabled: true,
      }}
      breakpoints={{
        1920: {
          slidesPerView: 8,
          slidesPerGroup: 4,
        },
        1660: {
          slidesPerView: 8,
          slidesPerGroup: 2,
        },
        1500: {
          slidesPerView: 7,
          slidesPerGroup: 2,
        },
        1300: {
          slidesPerView: 6,
          slidesPerGroup: 2,
        },
        1100: {
          slidesPerView: 5,
          slidesPerGroup: 2,
        },
        900: {
          slidesPerView: 4,
          slidesPerGroup: 2,
        },
        700: {
          slidesPerView: 3,
          slidesPerGroup: 2,
        },
        400: {
          slidesPerView: 2,
          slidesPerGroup: 1,
        },
        200: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
      }}>
      {slideCard.map((item, index) => (
        <SwiperSlide key={index} className="swiperSlide">
          <div className="posterImage">
            <div className="overlay">
              <Link to={`/detailMovie/${item.id}`} className="link">
                En voir plus <FaArrowUpRightFromSquare />
              </Link>
            </div>
            <img
              src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
              alt={item.name || item.title}
              className="posterImage__img"
            />
          </div>

          <div className="title">
            <h4>
              {item
                ? item.name || item.title
                : "Désolé, il n'y a pas de titre !"}
            </h4>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlideMovieDiscover;
