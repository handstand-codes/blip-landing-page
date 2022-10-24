import React from "react";
import { ReactComponent as InstaLogo } from "~assets/svg/instagram.svg";
import { ReactComponent as TikTokLogo } from "~assets/svg/tik-tok.svg";
import { ReactComponent as TwitterLogo } from "~assets/svg/twitter.svg";
import * as styles from "./SocialLogos.module.scss";

const SocialLogos = () => (
  <div className={styles.container}>
    <a
      href="https://www.instagram.com/"
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Instagram"
    >
      <InstaLogo className={styles.icon} />
    </a>
    <a
      href="https://www.tiktok.com/"
      target="_blank"
      rel="noreferrer noopener"
      aria-label="TikTok"
    >
      <TikTokLogo className={styles.icon} />
    </a>
    <a
      href="https://www.twitter.com/"
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Twitter"
    >
      <TwitterLogo className={styles.icon} />
    </a>
  </div>
);

export default SocialLogos;
