// https://swiperjs.com/react

import React, { useRef, useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import "swiper/css/bundle";

const SwiperCarousel = ({ id, _css, gridwrap, loop, options, nav, slides }) => {
  SwiperCore.use([Autoplay]);

  // ---------------------------------------------------------------------------
  // context / ref / state

  const swiper = useRef(null);

  const [current, setCurrent] = useState(1);
  const [slideKeys, setSlideKeys] = useState([]);

  // ---------------------------------------------------------------------------
  // methods

  const next = () => {
    if (!swiper?.current?.swiper?.slideNext) {
      return;
    }
    swiper.current.swiper.slideNext();
  };

  const prev = () => {
    if (!swiper?.current?.swiper?.slidePrev) {
      return;
    }
    swiper.current.swiper.slidePrev();
  };

  const to = (index) => {
    if (!swiper?.current?.swiper?.slideTo) {
      return;
    }

    swiper.current.swiper.slideTo(index);
  };

  // ---------------------------------------------------------------------------
  // lifecycle

  useEffect(() => {
    const keys = slides.map(() => uuidv4());

    setSlideKeys(keys);
  }, [slides]);

  // ---------------------------------------------------------------------------
  // render

  const swiperJSX = (
    <>
      <Swiper
        id={id}
        ref={swiper}
        loop={loop}
        onSlideChange={({ realIndex }) => {
          setCurrent(realIndex);
        }}
        breakpoints={{
          1600: {
            slidesPerView: 4
          },
          1260: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 2
          },
          340: {
            slidesPerView: 1
          }
        }}
        {...options}
      >
        {slides.map((slide, slideIndex) => (
          <SwiperSlide key={slideKeys[slideIndex]}>{slide}</SwiperSlide>
        ))}
      </Swiper>

      {nav &&
        nav({
          current,
          next,
          prev,
          to
        })}
    </>
  );

  return swiperJSX;
};

SwiperCarousel.defaultProps = {
  id: `default-swiper`,
  _css: ``,
  gridwrap: false,
  loop: true,
  options: {
    spaceBetween: 0,
    slidesPerView: 1
  },
  slides: null,
  slideColumnWidth: null
};
SwiperCarousel.propTypes = {
  id: PropTypes.string,
  _css: PropTypes.string,
  gridwrap: PropTypes.bool,
  loop: PropTypes.bool,
  options: PropTypes.shape({}),
  slides: PropTypes.arrayOf(PropTypes.shape({})),
  slideColumnWidth: PropTypes.number
};

export default SwiperCarousel;
