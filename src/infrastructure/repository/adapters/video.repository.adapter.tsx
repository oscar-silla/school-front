import axios from "axios";
import { BaseUrl } from "../../../application/constants";
import { VideoType } from "../types";

const VideoRepositoryAdapter = {
  createVideo: async (video: VideoType) => {},
  getVideoByRef: async (ref: string): Promise<VideoType | boolean> => {
    return await axios
      .get(`${BaseUrl}/video/${ref}`)
      .then((res) => res?.data)
      .catch(() => false);
  },
};

export default VideoRepositoryAdapter;
