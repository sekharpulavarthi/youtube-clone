import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../../utils/constants/APIConstants";
import VideoCard from "../VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [scrollDown, setScrollDown] = useState([]);

  useEffect(() => {
    getVideos();
  }, [scrollDown]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);

    const jsonData = await data.json();

    setVideos(jsonData.items);
  };

  return videos.length === 0 ? (
    <h1>Loading....</h1>
  ) : (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
