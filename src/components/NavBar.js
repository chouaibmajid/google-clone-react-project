import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import ImageIcon from "@mui/icons-material/Image";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import LineWeightIcon from "@mui/icons-material/LineWeight";
function NavBar({ darkMode, setDarkMode }) {
  return (
    <div className="p-5 pb-2 flex flex-wrap sm:justify-between  justify-center items-center border-b border-gray-200 dark:border-gray-700">
      <div className=" uppercase flex justify-between items-center space-x-5 w-screen ">
        <Link to="/">
          {" "}
          <p className="text-2xl bg-blue-500 rounded-full dark:text-blue-500 text-gray-100 dark:bg-gray-100 font-bold px-3 py-2">
            chouaib google 🔎
          </p>{" "}
        </Link>
        <div className="items-center ">
          <Search />
          <div className="flex items-center justify-center mt-5">
            {" "}
            <div className="hover:shadow mx-3 flex flex-wrap text-lg m-0 ">
              {" "}
              <LineWeightIcon /> <Link to="/">All</Link>{" "}
            </div>
            <div className="hover:shadow mx-3 flex flex-wrap text-lg m-0 ">
              {" "}
              <ImageIcon /> <Link to="/images">images</Link>{" "}
            </div>
            <div className="hover:shadow mx-3 flex flex-wrap text-lg m-0">
              {" "}
              <FiberNewIcon />
              <Link to="/news">news</Link>{" "}
            </div>
            <div className="hover:shadow mx-3 flex flex-wrap text-lg m-0">
              {" "}
              <VideoLibraryIcon /> <Link to="/videos">videos</Link>{" "}
            </div>
          </div>
        </div>

        <button
          className=" px-5 py-2 font-bold uppercase dark:text-gray-900  bg-gray-700 text-gray-100 dark:bg-gray-100  rounded border hover:shadow "
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "light💡" : "dark "}
        </button>
      </div>
    </div>
  );
}

export default NavBar;
