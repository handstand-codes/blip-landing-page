import React from "react";
import { VideoResourceTile, WidthContainer } from "~components";
import * as styles from "./VideoResources.module.scss";

const VideoResources = ({ data: { title, resourceTiles } }) => (
  <div className={styles.container}>
    <WidthContainer paddingOnly>
      <h2 className={[`h2`, styles.title].join(` `)}>{title}</h2>
      <div className={styles.tileGrid}>
        {resourceTiles.map((tile, i) => (
          <div className={styles.tileContainer} key={i}>
            <VideoResourceTile
              title={tile.title}
              image={tile.image}
              description={tile.description}
              link={tile.link}
              video={tile.video}
            />
          </div>
        ))}
      </div>
    </WidthContainer>
  </div>
);

export default VideoResources;
