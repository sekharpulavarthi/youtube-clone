import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //Early return Pattern
  if (!isMenuOpen) {
    return null;
  }

  return (
    <div className="p-5 shadow-md w-48 pt-24">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h1 className="font-bold pt-5">You</h1>
      <ul>
        <li>Your Channel</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
      </ul>
      <h1 className="pt-5 font-bold">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>Sports</li>
        <li>News</li>
        <li>Sports</li>
        <li>Learning</li>
      </ul>
      <h1 className="pt-5 font-bold">Explore</h1>
      <ul>
        <li>More from Youtube</li>
      </ul>
    </div>
  );
};

export default Sidebar;
