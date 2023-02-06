import React, { useState, useEffect } from "react";
import { VideoService } from "../services";
import { VideoType } from "../types";
const { getVideoByRef } = VideoService;

const useVideo = () => {
  const [video, setVideo] = useState<VideoType | boolean>(false);

  useEffect(() => {
    (async () => {
      getVideo("home");
    })();
  }, []);

  const getVideo = async (ref: string): Promise<void> => {
    const result = await getVideoByRef(ref);
    setVideo(result);
  };

  return {
    video,
  };
};

export default useVideo;
