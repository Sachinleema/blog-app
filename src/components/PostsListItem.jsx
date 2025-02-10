import { Link } from "react-router-dom";
import { posts } from "../constant.js";

const PostsListItem = () => {
  return (
    <div className="flex flex-wrap gap-8">
      {posts.map((post) => (
        <div key={post.id} className="flex flex-col xl:flex-row gap-8">
          <div className="md:hidden xl:block xl:w-1/3">
            <img
              src={post.image}
              alt={post.title}
              className="rounded-2xl object-cover w-[735px] max-h-[200px]"
            />
          </div>
          <div className="flex flex-col gap-2 xl:w-2/3">
            <Link to={post.link} className="text-2xl md:text-4xl font-semibold">
              {post.title}
            </Link>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Written by</span>
              <Link to={`/author/${post.author}`} className="text-blue-800">
                {post.author}
              </Link>
              <span>on</span>
              <Link to={`/category/${post.category}`} className="text-blue-800">
                {post.category}
              </Link>
              <span>{post.date}</span>
            </div>
            <p>{post.description}</p>
            <Link
              to="/test"
              className="text-blue-800 underline underline-offset-2"
            >
              Read more
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsListItem;
