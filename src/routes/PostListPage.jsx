import React from "react";
import SideMenu from "../components/SideMenu";
import { useState } from "react";
import PostLists from "../components/PostLists";

const PostListPage = () => {
  const [open, setopen] = useState(false);
  return (
    <div>
      <h1 className="mb-8 text-2xl">Development blog</h1>
      <button
        onClick={() => {
          setopen((prev) => !prev);
        }}
        className="md:hidden bg-blue-800 text-white py-2 px-4 rounded-xl mb-4"
      >
        {open ? "Close" : "Search"}
      </button>
      <div className="flex gap-8 flex-col-reverse md:flex-row">
        <div className="">
          <PostLists />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default PostListPage;
