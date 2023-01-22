import React, { useState, useEffect } from "react";
import { VideoService } from "../services";
import { Video } from "../types";
const { getOne } = VideoService;

export default function VideoHoc() {
  const [video, setVideo] = useState<Video | boolean>();

  useEffect(() => {
    (async () => {
      getVideo("home");
    })();
  }, []);

  const getVideo = async (ref: string): Promise<void> => {
    const result = await getOne(ref);
    setVideo(result);
  };

  return {
    methods: {
      getVideo,
    },
    states: {
      video,
    },
  };
}
