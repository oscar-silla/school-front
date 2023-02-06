import React from "react";
import { VideoType } from "../types";
import "../styles/video.style.css";

type Props = {
  video: VideoType | boolean;
};

const video = ({ video }: Props) => {
  console.log(video);
  return (
    <>
      {typeof video === "boolean" ? (
        <p>error</p>
      ) : (
        <div className="video">
          <iframe
            src={video.src}
            allowFullScreen
            title="YouTube video player"
            allow="autoplay;mute;loop;"
          ></iframe>
        </div>
      )}
    </>
  );
};

export default video;
