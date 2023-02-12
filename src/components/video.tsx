import "../styles/video.style.css";
// @ts-ignore
import videoMp4 from "../assets/video/presentation.mp4";

const video = () => {
  return (
    <>
      <video className="video" autoPlay muted loop>
        <source src={videoMp4} />
      </video>
    </>
  );
};

export default video;
