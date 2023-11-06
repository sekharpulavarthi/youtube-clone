import React, { useEffect, useState } from "react";
import { YOUTUBE_LOGO_URL } from "../../Common/constants/imageConstants";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BiSolidUserCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../utils/stores/slices/appSlice";
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "../../utils/constants/APIConstants";
import { cacheSearchResults } from "../../utils/stores/slices/searchSlice";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchCache = useSelector((store) => store.search);

  /*
  
  searchCache = {
    "iphone" : ["iphone 11", "iphone 15"]
  }
  searchQuery = iphone
  */

  // const searchInput = document.getElementById("searchInput"); // Replace with your actual input element
  // const searchResults = document.getElementById("searchResults"); // Replace with your actual results container

  // // Add a click event listener to the document
  // document.addEventListener("click", (event) => {
  //   console.log(event);
  //   // Check if the click event target is the search input or search results
  //   if (event.target !== searchInput && event.target !== searchResults) {
  //     // If the click is outside, hide the search results
  //     setShowSuggestions(false);
  //     console.log("add event listener");
  //   }
  // });

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchQuery);
    const jsonData = await data.json();

    setSuggestions(jsonData[1]);

    dispatch(
      cacheSearchResults({
        [searchQuery]: jsonData[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  // const setShowSuggestionsTo = (event) => {
  //   console.log("clicked messgae", event);
  //   // console.log(suggestionsContainerRef.current.contains(e.target));
  //   // if (suggestionsContainerRef.current.contains(e.target)) {
  //   //   setShowSuggestions(true);
  //   // } else {
  //   setShowSuggestions(false);
  //   // }
  // };

  // const suggestionClick = (suggestion, event) => {
  //   console.log(suggestion, "suggestion");
  // };

  const handleSubmit = () => {
    navigate("/results?search_query=" + searchQuery);
    setShowSuggestions(false);
  };

  return (
    <div className="fixed w-full bg-white top-0 z-10 grid grid-flow-col p-4 shadow-lg">
      <div className="flex col-span-1 align-center">
        <AiOutlineMenu
          onClick={toggleMenuHandler}
          className="w-8 h-8 mx-2 cursor-pointer"
        />
        <Link to="/">
          <img className="h-8" src={YOUTUBE_LOGO_URL} alt="youtube-logo" />
        </Link>
      </div>
      <div className="col-span-10 px-10">
        <div className="flex align-center">
          <input
            className="pl-4 w-1/2 border border-gray-400 rounded-l-full"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => {
              setTimeout(() => setShowSuggestions(false), 200);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
            id="searchInput"
            value={searchQuery}
          />
          <button
            onClick={handleSubmit}
            className="border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100"
          >
            <AiOutlineSearch className="h-6 w-6" />
          </button>
        </div>
        {showSuggestions && (
          <ul
            id="searchResults"
            className="fixed top-16 z-50 bg-white py-2 px-2 w-[29rem] rounded-lg border border-gray-200"
          >
            {suggestions.map((suggestion) => (
              <Link key={suggestion} to={"/results?search_query=" + suggestion}>
                <li
                  onClick={() => setSearchQuery(suggestion)}
                  className="bg-transparent w-full flex align-center px-2 py-2 shadow-sm cursor-pointer hover:bg-gray-100"
                >
                  <AiOutlineSearch className="h-6 mr-1" />
                  <span className="pr-2">{suggestion}</span>
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
      <div className="col-span-1">
        <BiSolidUserCircle className="h-8 w-8" />
      </div>
    </div>
  );
};

export default Header;
