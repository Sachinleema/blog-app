import React from "react";
import Comment from "./Comment";

const Comments = () => {
  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <div className="flex items-center w-full gap-8 justify-between">
        <textarea
          placeholder="write a comment"
          className="w-full p-4 rounded-xl bg-slate-100  text-black resize-none"
        />
        <button className="bg-blue-800 px-4 py-2 text-white font-medium rounded">
          Send
        </button>
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default Comments;
