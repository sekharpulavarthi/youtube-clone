import React from "react";

const SearchVideoCard = (props) => {
  const { videoItemDetails } = props;

  const { snippet } = videoItemDetails;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="m-2 w-full shadow-lg rounded-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt={title} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
      </ul>
    </div>
  );
};

export default SearchVideoCard;
