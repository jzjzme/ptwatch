import React from "react"
import styles from "./styles.scss"
import MP4 from "../../img/empire/empire.mp4"
import WEBM from "../../img/empire/empire.webm"

export const VideoBackground = ({className}) => (
  <div className={styles.videoContainer}>
      <div className={styles.filter}></div>
      <video autoPlay loop className={styles.fillWidth}>
          <source src={MP4} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
          <source src={WEBM} type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
      </video>
      <div className={`${styles.poster} ${styles.hidden}`}>
          <img src="PATH_TO_JPEG" alt="" />
      </div>
  </div>
)