import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="px-4 h-max stick top-8">
      <h1 className="mb-4 text-sm font-medium">Search</h1>
      <Search />
      <h1 className="mb-4 text-sm font-medium">Filter</h1>
      <div>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="newest"
            className="appearance-none w-4 h-4 bg-slate-100 border-blue-800 border-[1.5px] checked:bg-blue-800"
          />
          Newest
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="most-popular"
            className="appearance-none w-4 h-4 bg-slate-100 border-blue-800 border-[1.5px] checked:bg-blue-800"
          />
          Most Popular
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="trending"
            className="appearance-none w-4 h-4 bg-slate-100 border-blue-800 border-[1.5px] checked:bg-blue-800"
          />
          Trending
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="oldest"
            className="appearance-none w-4 h-4 bg-slate-100 border-blue-800 border-[1.5px] checked:bg-blue-800"
          />
          Oldest
        </label>
      </div>
      <h1 className="mb-4 text-sm font-medium">Category</h1>
      <div className="flex flex-col gap-2 text-sm">
        <Link className="underline" to="/posts">
          All
        </Link>
        <Link className="underline" to="/posts/cat=web-design">
          Web design
        </Link>
        <Link className="underline" to="/posts/cat=development">
          Development
        </Link>
        <Link className="underline" to="/posts/cat=database">
          Database
        </Link>
        <Link className="underline" to="/posts/seo">
          Search Engines
        </Link>
        <Link className="underline" to="/posts/marketing">
          Marketing
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
