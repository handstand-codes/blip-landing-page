import { css } from "@emotion/react";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { useRef, useState } from "react";
import { ReactComponent as PlayIcon } from "~assets/svg/play-icon.svg";
import * as styles from "./VideoResourceTile.module.scss";

const VideoResourceTile = ({ title, description, image, video, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current.play();
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    videoRef.current.pause();
  };

  return (
    <div>
      <a
        href={link?.url}
        className={[
          styles.linkContainer,
          `button-text`,
          isHovered ? styles.hovered : null
        ].join(` `)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* <GatsbyImage
          image={image?.asset?.gatsbyImageData}
          alt={image?.altText}
          className={[
						styles.thumbnail,
            isHovered ? styles.transparent : null
          ].join(` `)}
        /> */}
        <video ref={videoRef} muted src={video} className={styles.video} />
        <img src={image} alt="" className={styles.thumbnail} />
        <div className={styles.linkPill}>
          {link?.text}

          <PlayIcon
            css={css`
              height: 18px;
              display: block;
              margin-left: 8px;
            `}
            fill="var(--color-black-90)"
          />
        </div>
      </a>
      <div className={[`h4`, styles.title].join(` `)}>{title}</div>
      <p className="b1">{description}</p>
    </div>
  );
};

export default VideoResourceTile;
