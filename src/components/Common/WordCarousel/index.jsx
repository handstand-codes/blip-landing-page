import React from "react";
import Marquee from "react-fast-marquee";
import * as style from "./WordCarousel.module.scss";
import wordCarouselMock from "./mock";

const WordCarousel = ({ thingsToFace = wordCarouselMock }) => {
  const DUPLICATIONS = 10;
  const duplicatedArray = [];

  for (let i = 0; i < DUPLICATIONS; i++) {
    duplicatedArray.push(thingsToFace);
  }

  const flatDuplicatedArray = duplicatedArray.flat();

  return (
    <div className={style.marquee}>
      <Marquee gradient={false} speed={70} pauseOnHover>
        {flatDuplicatedArray.map((item, i) => (
          <span className={[style.marquee__item, `h2`].join(` `)} key={i}>
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default WordCarousel;
