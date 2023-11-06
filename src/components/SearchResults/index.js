import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_RESULTS_API } from "../../utils/constants/APIConstants";
import { useSearchParams } from "react-router-dom";
import SearchVideoCard from "../SearchVideoCard";

const SearchResults = () => {
  const [searchText] = useSearchParams();
  const [searchResults, setSearchResults] = useState("");

  console.log(searchText.get("search_query"));

  useEffect(() => {
    getSearchResults();
  }, [searchText]);

  const getSearchResults = async () => {
    const data = await fetch(`${YOUTUBE_SEARCH_RESULTS_API} + q=${searchText}`);
    const jsonData = await data.json();
    console.log(jsonData.items);
    setSearchResults(jsonData.items);
  };

  return searchResults.length === 0 ? (
    <h1>Loading....</h1>
  ) : (
    <div className="pt-24">
      {searchResults.map((videoItem) => (
        <SearchVideoCard
          key={videoItem.id.videoId}
          videoItemDetails={videoItem}
        />
      ))}
    </div>
  );
};

export default SearchResults;
