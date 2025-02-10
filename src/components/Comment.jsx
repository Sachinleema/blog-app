import React from "react";
import Image from "./Image";

const Comment = () => {
  return (
    <div className="p-4 bg-slate-100 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <Image
          src="userImg.jpeg"
          className="w-10 h-10 rounded-full object-cover"
          w="40"
          h="40"
        />
        <span className="text-blue-800 font-medium">John Doe</span>
        <span className="text-sm text-gray-500">2 days ago</span>
      </div>
      <div className="mt-4">
        <p className="text-sm ">
          This is a well-written and insightful blog! I appreciate the depth of
          information and the clarity with which the topic was explained.
          Looking forward to more content like this!
        </p>
      </div>
    </div>
  );
};

export default Comment;
