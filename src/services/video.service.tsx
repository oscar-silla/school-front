import axios from "axios";
import { BaseUrl } from "../constants";
import { Video } from "../types";

const VideoService = {
  createVideo: async (video: Video) => {},
  getVideoByRef: async (ref: string): Promise<Video | boolean> => {
    return await axios
      .get(`${BaseUrl}/video/${ref}`)
      .then((res) => res?.data)
      .catch(() => false);
  },
};

export default VideoService;
