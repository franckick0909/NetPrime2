import "./SlideCast.scss";
import propType from "prop-types";
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/grid";
import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const SlideCast = ({ imageSrc, title, lien }) => {

  return (
    <Swiper
      className="swiperContainer"
      modules={[Navigation]}
      slidesPerView={8}
      spaceBetween={20}
      loop={true}
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
      <SwiperSlide className="swiperSlide">
        <div className="posterImage">
          <div className="overlay">
            <Link to={lien} className="link">
              En voir plus <FaArrowUpRightFromSquare />
            </Link>
          </div>

          <img src={imageSrc} alt={title} className="img-swiper" />
        </div>

        <div className="title">
          <p>{title}</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

SlideCast.propTypes = {
    imageSrc: propType.string.isRequired,
  title: propType.string.isRequired,
  lien: propType.string.isRequired,
    };

export default SlideCast;