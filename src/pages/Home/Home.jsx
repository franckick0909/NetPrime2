import { useEffect, useState } from "react";
import "./Home.scss";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { FaStar } from "react-icons/fa6";

const Home = () => {

  const { id } = useParams();

  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/trending/movie/week?language=fr-en-US&api_key=1e93c6df58e7f3f360d4dbba44795906&adult=true&include_video=true";

    const fetchPopularMovies = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPopularMovies(data.results);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchPopularMovies();
  }, [id]);

  return (
    <div className="home">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper">
        {popularMovies.map((item, index) => (
          <SwiperSlide key={index} className="swiperSlide">
            <div className="posterImage">
              <img
                src={`https://image.tmdb.org/t/p/original/${
                  item && item.backdrop_path
                }`}
                alt={item.title || item.name}
              />
            </div>
            <div className="posterImage__overlay">
              <div className="container">
                <div className="container__title titre">
                  {item ? item.title || item.name : ""}
                </div>

                <div className="container__runtime">
                  {item ? item.release_date || item.first_air_date : ""}

                  <span className="container__rating">
                    {item ? item.vote_average : ""}
                    <FaStar className="star"/>{" "}
                  </span>
                </div>

                <div className="container__overview">
                  {item ? item.overview : ""}
                </div>

                <Link to={`/detailMovie/${item.id}`} className="link">En voir plus <FaArrowUpRightFromSquare />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
