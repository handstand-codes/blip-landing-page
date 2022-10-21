import React from "react";
import { ReactComponent as InstaLogo } from "~assets/svg/instagram.svg";
import { ReactComponent as TikTokLogo } from "~assets/svg/tik-tok.svg";
import { ReactComponent as TwitterLogo } from "~assets/svg/twitter.svg";
import * as styles from "./SocialLogos.module.scss";

const SocialLogos = () => (
  <div className={styles.container}>
    <InstaLogo className={styles.icon} />
    <TikTokLogo className={styles.icon} />
    <TwitterLogo className={styles.icon} />
  </div>
);

export default SocialLogos;
