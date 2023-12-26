import React from "react";
import styles from "./styles.module.scss";

function VideoSection() {
  return (
    <>
      <div className={styles.videoContainer}>
        <iframe
          // width="853"
          // height="480"
          // style={{
          //   width: "100vw",
          //   height: "100vh",
          // }}
          src="https://www.youtube.com/embed/Ijes99ZmEyE?autoplay=1&mute=1&rel=0"
          title="SGT Introduction Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default VideoSection;
