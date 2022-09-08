import React from "react";
import styled from "@emotion/styled";
import { useInView } from "react-intersection-observer";
import { Image, Scrambler, SliceContainer, Video } from "~components";

const TitleWrapper = styled.p`
  margin-bottom: 48px;
`;

const Media = ({ key, data: { backgroundColor, title, image, videoURL } }) => {
  const { ref, inView } = useInView();

  return (
    <SliceContainer backgroundColor={backgroundColor?.title}>
      <TitleWrapper ref={ref}>
        {title && inView && (
          <Scrambler className="b1" delay={10} iterations={8} text={title} />
        )}
      </TitleWrapper>

      {image && <Image image={image} alt={image?.altText || title || ``} />}

      {videoURL && <Video id={`${title}-video-${key}`} src={videoURL} />}
    </SliceContainer>
  );
};

export default Media;
