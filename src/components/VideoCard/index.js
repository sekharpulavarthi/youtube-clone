const VideoCard = (props) => {
  const { info } = props;

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  const { viewCount } = statistics;

  return (
    <div className="m-2 w-72 shadow-lg rounded-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt={title} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
