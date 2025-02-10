import { useAuth, useUser } from "@clerk/clerk-react";
import React from "react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Upload from "../components/Upload";

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [value, setValue] = useState("");
  const [cover, setCover] = useState("");
  const [progress, setProgress] = useState("0");

  const navigate = useNavigate();
  const { getToken } = useAuth();

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (res) => {
      toast.success("Post has been created");
      navigate(`/${res.data.slug}`);
    },
  });

  if (!isLoaded) {
    return (
      <div>
        <h1>Loading.....</h1>
      </div>
    );
  }
  if (isLoaded && !isSignedIn) {
    return (
      <div>
        <h1>Please Log In</h1>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      title: formData.get("title"),
      category: formData.get("category"),
      desc: formData.get("desc"),
      content: value,
    };
    mutation.mutate(data);
  };

  return (
    <div className="h-[calc(100vh-64px) md:h-[calc(100vh-80px) flex flex-col gap-6]">
      <h1 className="text-xl font-light">Create a New Post</h1>
      <form
        onSubmit={handleSubmit}
        className="flex p-2 flex-col gap-6 flex-1 mb-6"
      >
        <Upload type="image" setProgress={setProgress} setData={setCover}>
          <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-slate-100">
            Add a cover image
          </button>
        </Upload>
        <input
          type="text"
          id=""
          placeholder="Title"
          className="text-4xl font-semibold bg-transparent outline-none"
          name="title"
        />
        <div className="flex items-center gap-2">
          <label htmlFor="" className="text-sm">
            Choose a category:
          </label>
          <select
            name="category"
            id=""
            className="px-4 py-2 rounded-xl bg-slate-100 shadow-md font-light"
          >
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="database">Database</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          name="desc"
          id=""
          placeholder="A Short Description"
          className="p-4 bg-slate-100 shadow-md outline-none resize-none h-14"
        />
        <div className="flex">
          <div className="flex flex-col gap-2 mr-2">
            <div className="cursor-pointer">📷</div>
            <div className="cursor-pointer">🔁</div>
          </div>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className=" bg-slate-100 shadow-md outline-none h-32 w-full"
          />
        </div>
        <button
          disabled={mutation.isPending || (0 < progress && progress < 100)}
          className="bg-blue-800 text-white font-medium rounded-xl mt-4 w-36 p-2 disabled:bg-blue-500 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? "Loading..." : "Send"}
        </button>
        {"Progress:" + progress}
        {mutation.isError && <span>{mutation.error.message}</span>}
      </form>
    </div>
  );
};

export default Write;
