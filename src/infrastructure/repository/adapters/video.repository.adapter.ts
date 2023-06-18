import axios from "axios";
import { BASE_URL } from "../../../application/src/constants";
import { VideoType } from "../types";

const VideoRepositoryAdapter = {
  createVideo: async (video: VideoType) => {},
  getVideoByRef: async (ref: string): Promise<VideoType | boolean> => {
    return await axios
      .get(`${BASE_URL}/video/${ref}`)
      .then((res) => res?.data)
      .catch(() => false);
  },
};

export default VideoRepositoryAdapter;
