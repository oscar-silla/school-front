import React, { useEffect, useState } from "react";
import { VideoRepositoryAdapter } from "../../infrastructure/repository/adapters";
import { VideoType } from "../../infrastructure/repository/types";

const { getVideoByRef } = VideoRepositoryAdapter;

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
