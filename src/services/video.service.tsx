import axios from "axios";
import { BaseUrl } from "../constants";
import { VideoType } from "../types";

const VideoService = {
  createVideo: async (video: VideoType) => {},
  getVideoByRef: async (ref: string): Promise<VideoType | boolean> => {
    return await axios
      .get(`${BaseUrl}/video/${ref}`)
      .then((res) => res?.data)
      .catch(() => false);
  },
};

export default VideoService;
