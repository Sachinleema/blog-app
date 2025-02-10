import React from "react";
import Image from "./Image";
import { Link } from "react-router-dom";

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-4 ">
      {/*First Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/*Image */}
        <Image src="featured1.jpeg" className="rounded-3xl object-cover" />
        <div className="flex gap-4 items-center">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-blue-800 lg:text-lg">Web design</Link>
          <span className="text-gray-500">2 days ago</span>
        </div>
        <Link className="text-xl lg:text-3xl font-semibold lg:font-bold">
          how eco-friendly textiles and consumer habits can revolutionize the
          way we dress.
        </Link>
      </div>
      {/*Second Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        {/* First Item */}
        <div className="flex gap-4 items-start">
          <Image
            src="featured2.jpeg"
            className="rounded-3xl object-cover h-20 md:h-28 w-20 md:w-28"
          />
          <div className="w-2/3 flex flex-col justify-between">
            <div className="flex items-center gap-4 text-sm lg:text-base">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800 hover:underline">Web Design</Link>
              <span className="text-gray-500">2 days ago</span>
            </div>
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-lg xl:text-xl font-medium hover:text-blue-600  mt-0 md:mt-6"
            >
              Innovation in sustainable fabrics is shaping the future of
              fashion.
            </Link>
          </div>
        </div>

        {/* Placeholder Divs for Additional Content */}
        <div className="flex gap-4 items-start">
          <Image
            src="featured3.jpeg"
            className="rounded-3xl object-cover h-20 md:h-28 w-20 md:w-28"
          />

          <div className="w-2/3 flex flex-col justify-between">
            <div className="flex items-center gap-4 text-sm lg:text-base">
              <h1 className="font-semibold">03.</h1>
              <Link className="text-blue-800 hover:underline">
                Graphic Design
              </Link>
              <span className="text-gray-500">1 week ago</span>
            </div>
            <Link
              to="/example"
              className="text-base sm:text-lg md:text-2xl lg:text-lg xl:text-xl font-medium hover:text-blue-600 mt-0 md:mt-6"
            >
              Exploring the artistry of minimalistic design principles.
            </Link>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <Image
            alt="featured"
            src="featured4.jpeg"
            className="rounded-3xl object-cover h-20 w-20 md:h-28 md:w-28"
          />
          <div className="w-2/3 flex flex-col justify-between">
            <div className="flex items-center gap-4 text-sm lg:text-base">
              <h1 className="font-semibold">04.</h1>
              <Link className="text-blue-800 hover:underline">
                Sustainability
              </Link>
              <span className="text-gray-500">3 days ago</span>
            </div>
            <Link
              to="/eco"
              className="text-base sm:text-lg md:text-2xl lg:text-lg xl:text-xl font-medium hover:text-blue-600 mt-0 md:mt-6"
            >
              Simple ways to adopt eco-friendly practices in daily life.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
