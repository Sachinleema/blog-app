import React from "react";
import Image from "../components/Image";
import { Link } from "react-router-dom";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8 mt-0 md:mt-4">
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Urban planning is the process of designing and organizing the
            physical sustainable and livable environments.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">John Doe</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
        </div>
        <div className="hidden md:block w-2/5">
          <Image src="postImg.jpeg" className="rounded-3xl" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        {/*content */}
        <div className="lg:text-lg flex flex-col gap-4 text-justify">
          <p>
            A well-executed urban plan addresses key challenges such as traffic
            congestion, pollution, housing shortages, and equitable access to
            services. It incorporates zoning regulations to allocate specific
            areas for residential, commercial, industrial, and recreational
            purposes. Urban planners often emphasize the importance of green
            spaces, walkable neighborhoods, and efficient public transportation
            systems to reduce dependency on private vehicles and minimize
            environmental harm.
          </p>
          <p>
            Urban planning also integrates innovative technologies and smart
            city solutions to optimize resource management and enhance
            connectivity. It encourages mixed-use developments, combining
            residential and commercial spaces to create vibrant, self-sufficient
            communities. Public participation is a vital aspect of the planning
            process, as it ensures that the voices and needs of residents are
            considered in shaping their surroundings.
          </p>
          <p>
            By focusing on sustainability, resilience, and inclusivity, urban
            planning aims to create cities that are not only functional but also
            adaptable to future challenges such as population growth, climate
            change, and technological advancements.
          </p>
          <p>
            A well-executed urban plan addresses key challenges such as traffic
            congestion, pollution, housing shortages, and equitable access to
            services. It incorporates zoning regulations to allocate specific
            areas for residential, commercial, industrial, and recreational
            purposes. Urban planners often emphasize the importance of green
            spaces, walkable neighborhoods, and efficient public transportation
            systems to reduce dependency on private vehicles and minimize
            environmental harm.
          </p>
          <p>
            Urban planning also integrates innovative technologies and smart
            city solutions to optimize resource management and enhance
            connectivity. It encourages mixed-use developments, combining
            residential and commercial spaces to create vibrant, self-sufficient
            communities. Public participation is a vital aspect of the planning
            process, as it ensures that the voices and needs of residents are
            considered in shaping their surroundings.
          </p>
          <p>
            By focusing on sustainability, resilience, and inclusivity, urban
            planning aims to create cities that are not only functional but also
            adaptable to future challenges such as population growth, climate
            change, and technological advancements.
          </p>
        </div>
        {/*menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <Image
                src="userImg.jpeg"
                className="w-12 h-12 rounded-full object-cover"
                w="48"
                h="48"
              />
              <Link className="text-blue-800">John Doe</Link>
            </div>
            <p className="text-sm text-gray-500">
              is a passionate writer and researcher that inspires.
            </p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Database
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>

          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default SinglePostPage;
