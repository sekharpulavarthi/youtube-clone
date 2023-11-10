import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiFillFire,
  AiOutlineShopping,
  AiFillSetting,
} from "react-icons/ai";

import {
  MdLiveTv,
  MdOutlineLibraryAdd,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdSportsCricket,
  MdFeedback,
} from "react-icons/md";

import { SiYoutubemusic } from "react-icons/si";
import { LuListVideo } from "react-icons/lu";
import { BsMusicNote } from "react-icons/bs";
import { IoGameController } from "react-icons/io5";
import { BiHelpCircle } from "react-icons/bi";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) {
    return null;
  }

  return (
    <div className="p-5 shadow-md w-56 pt-24">
      <ul>
        <li>
          <Link
            to="/"
            className="flex font-normal items-center py-2 rounded-lg hover:bg-slate-100 px-4 text-base my-2 dark:hover:bg-slate-600"
          >
            <AiOutlineHome /> <span className="px-2">Home</span>
          </Link>
        </li>
        <li>
          <Link
            to="/Shorts"
            className="flex font-normal items-center py-2 rounded-lg hover:bg-slate-100 px-4 text-base my-2 dark:hover:bg-slate-600"
          >
            <MdOutlineVideoLibrary /> <span className="px-2">Shorts</span>
          </Link>
        </li>
        <li>
          <Link
            to="/Subscriptions"
            className="flex font-normal items-center py-2 rounded-lg hover:bg-slate-100 px-4 text-base my-2 dark:hover:bg-slate-600"
          >
            <MdSubscriptions /> <span className="px-2">Subscriptions</span>
          </Link>
        </li>
        <li>
          <Link
            to="/Music"
            className="flex font-normal items-center py-2 rounded-lg hover:bg-slate-100 px-4 text-base my-2 dark:hover:bg-slate-600"
          >
            <SiYoutubemusic /> <span className="px-2">Music</span>
          </Link>
        </li>
        <li>
          <Link
            to="/Library"
            className="flex font-normal items-center py-2 rounded-lg hover:bg-slate-100 px-4 text-base my-2 dark:hover:bg-slate-600"
          >
            <MdOutlineLibraryAdd /> <span className="px-2">Library</span>
          </Link>
        </li>
        <li>
          <Link
            to="/Videos"
            className="flex font-normal items-center py-2 rounded-lg hover:bg-slate-100 px-4 text-base my-2 dark:hover:bg-slate-600"
          >
            <MdLiveTv /> <span className="px-2">Videos</span>
          </Link>
        </li>
        <li>
          <Link
            to="/Watch Later"
            className="flex font-normal items-center py-2 rounded-lg hover:bg-slate-100 px-4 text-base my-2 dark:hover:bg-slate-600"
          >
            <LuListVideo /> <span className="px-2">Watch Later</span>
          </Link>
        </li>
        <li>
          <Link
            to="/Trending"
            className="flex font-normal items-center py-2 rounded-lg hover:bg-slate-100 px-4 text-base my-2 dark:hover:bg-slate-600"
          >
            <AiFillFire /> <span className="px-2">Trending</span>
          </Link>
        </li>
        <li>
          <Link
            to="/Shopping"
            className="flex font-normal items-center py-2 rounded-lg hover:bg-slate-100 px-4 text-base my-2 dark:hover:bg-slate-600"
          >
            <AiOutlineShopping /> <span className="px-2">Shopping</span>
          </Link>
        </li>
        <li>
          <Link
            to="/Music"
            className="flex font-normal items-center py-2 rounded-lg hover:bg-slate-100 px-4 text-base my-2 dark:hover:bg-slate-600"
          >
            <BsMusicNote /> <span className="px-2">Videos</span>
          </Link>
        </li>
        <li>
          <Link
            to="/Games"
            className="flex font-normal items-center py-2 rounded-lg hover:bg-slate-100 px-4 text-base my-2 dark:hover:bg-slate-600"
          >
            <IoGameController /> <span className="px-2">Games</span>
          </Link>
        </li>
        <li>
          <Link
            to="/Sports"
            className="flex font-normal items-center py-2 rounded-lg hover:bg-slate-100 px-4 text-base my-2 dark:hover:bg-slate-600"
          >
            <MdSportsCricket /> <span className="px-2">Sports</span>
          </Link>
        </li>
        <li>
          <Link
            to="/Settings"
            className="flex font-normal items-center py-2 rounded-lg hover:bg-slate-100 px-4 text-base my-2 dark:hover:bg-slate-600"
          >
            <AiFillSetting /> <span className="px-2">Settings</span>
          </Link>
        </li>
        <li>
          <Link
            to="/Help"
            className="flex font-normal items-center py-2 rounded-lg hover:bg-slate-100 px-4 text-base my-2 dark:hover:bg-slate-600"
          >
            <BiHelpCircle /> <span className="px-2">Help</span>
          </Link>
        </li>
        <li>
          <Link
            to="/Feedback"
            className="flex font-normal items-center py-2 rounded-lg hover:bg-slate-100 px-4 text-base my-2 dark:hover:bg-slate-600"
          >
            <MdFeedback /> <span className="px-2">Feedback</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
