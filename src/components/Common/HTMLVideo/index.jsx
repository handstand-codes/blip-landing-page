import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { useInView } from "react-intersection-observer";

/** ============================================================================
 * @css
 */

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const HTMLVideo = ({
  className = ``,
  autoPlay = false,
  controls = false,
  loop = false,
  muted = true,
  onComplete = () => {},
  playsInline = true,
  poster = null,
  restart = false,
  src
}) => {
  // ---------------------------------------------------------------------------
  // context / ref / state

  const { ref, inView } = useInView();

  const videoRef = useRef();

  const [complete, setComplete] = useState(false);
  const [duration, setDuration] = useState(null);
  const [position, setPosition] = useState(0);

  // ---------------------------------------------------------------------------
  // lifecycle

  // initial []
  useEffect(() => {
    if (!videoRef?.current) {
      return () => {};
    }

    // duration / metadata

    const onLoadedMetadata = () => {
      setDuration(videoRef.current.duration);

      videoRef.current.onpause = () => {
        if (videoRef?.current) {
          videoRef.current.playing = false;
        }
      };

      videoRef.current.onplaying = () => {
        if (videoRef?.current) {
          videoRef.current.playing = true;
        }
      };
    };

    videoRef.current.addEventListener(
      `loadedmetadata`,
      onLoadedMetadata,
      false
    );

    // current playback position

    const onTimeUpdate = () => {
      if (!videoRef?.current) {
        return;
      }

      setPosition(videoRef.current.currentTime);
    };

    videoRef.current.addEventListener(`timeupdate`, onTimeUpdate, false);

    // cleanup

    return () => {
      if (!videoRef?.current) {
        return;
      }

      videoRef.current.removeEventListener(
        `loadedmetadata`,
        onLoadedMetadata,
        false
      );

      videoRef.current.removeEventListener(`timeupdate`, onTimeUpdate, false);
    };
  }, [videoRef]);

  // on position change; (position / duration) === percent complete
  useEffect(() => {
    if (duration === null) {
      return;
    }

    setComplete(position / duration >= 1);
  }, [duration, position]);

  // run a caller method on playback finish
  useEffect(() => {
    if (complete) {
      onComplete();
    }
  }, [complete, onComplete]);

  // pause when not visible
  useEffect(() => {
    if (!videoRef?.current) {
      return;
    }

    if (inView && !videoRef?.current?.playing) {
      videoRef.current.play();
    }

    if (!inView && videoRef?.current?.playing) {
      videoRef.current.pause();
    }

    if (!inView && restart && position !== 0) {
      videoRef.current.currentTime = 0;
    }
  }, [videoRef, inView, restart, position]);

  // ---------------------------------------------------------------------------
  // render

  return (
    <Container ref={ref}>
      <video
        ref={videoRef}
        className={className}
        autoPlay={autoPlay}
        controls={controls}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        poster={poster}
      >
        <source src={src} />
      </video>
    </Container>
  );
};

export default HTMLVideo;
