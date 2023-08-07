import { Blog } from "@/models/blog";
import Link from "next/link";

export const SingleBlog: React.FC<Blog> = ({ userId, id, title, body }) => {
  return (
    <Link
      href={`/blog/${id}`}
      className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl"
    >
      <img
        src="https://tailus.io/sources/blocks/twocards/preview/images/woman.jpg"
        alt="art cover"
        loading="lazy"
        width="1000"
        height="667"
        className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
      />
      <div className="sm:w-5/12 mx-auto pl-0 p-5">
        <div className="space-y-2">
          <div className="space-y-4">
            <h4 className="text-2xl font-semibold text-cyan-900">
              {title}
            </h4>
            <p className="text-gray-600">
              {body.slice(0, 150)}...
            </p>
          </div>
          <p className="block w-max text-cyan-600 hover:cursor-pointer hover:underline">
            Read more
          </p>
        </div>
      </div>
    </Link>
  );
};
