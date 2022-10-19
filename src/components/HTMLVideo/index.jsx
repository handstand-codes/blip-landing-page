import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import * as styles from "./HTMLVideo.module.scss";

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
  const { ref, inView } = useInView();

  const videoRef = useRef();

  const [complete, setComplete] = useState(false);
  const [duration, setDuration] = useState(null);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    if (!videoRef?.current) {
      return () => {};
    }

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

  return (
    <div className={styles.container} ref={ref}>
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
    </div>
  );
};

export default HTMLVideo;
