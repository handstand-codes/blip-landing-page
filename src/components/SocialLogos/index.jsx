import React from "react";
import { ReactComponent as InstaLogo } from "~assets/svg/instagram.svg";
import { ReactComponent as TikTokLogo } from "~assets/svg/tik-tok.svg";
import { ReactComponent as TwitterLogo } from "~assets/svg/twitter.svg";
import * as styles from "./SocialLogos.module.scss";

const SocialLogos = () => (
  <>
    <ul className={styles.container}>
      <li className={styles.listItem}>
        <a
          href="https://www.instagram.com/blip.nrt/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Instagram"
          className={styles.link}
        >
          <InstaLogo className={styles.icon} />
        </a>
      </li>
      <li className={styles.listItem}>
        <a
          href="https://www.tiktok.com/@blipclub"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="TikTok"
          className={styles.link}
        >
          <TikTokLogo className={styles.icon} />
        </a>
      </li>
      <li className={styles.listItem}>
        <a
          href="https://twitter.com/blipclubco"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Twitter"
          className={styles.link}
        >
          <TwitterLogo className={styles.icon} />
        </a>
      </li>
    </ul>
    <div className={caption}>
        &copy; 2023, Blip Products, Inc. All Rights Reserved
    </div>
  </>
  
);

export default SocialLogos;
