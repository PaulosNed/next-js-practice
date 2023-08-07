import { Blog } from "@/models/blog";
import { getBlog } from "@/services/BlogService";
import Link from "next/link";
import React from "react";



export default async function Blog({ params }: { params: { id: number } }) {
  const id: number = params.id;
  const blog: Blog = await getBlog(id);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 w-[32rem]">
        <header className="flex font-light text-sm">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 rotate-90 -ml-2"
            viewBox="0 0 24 24"
            stroke="#b91c1c"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg> */}
          <p>BLOG CATAGORY</p>
        </header>

        <h2 className="font-bold text-3xl mt-2">
          {blog.title}
        </h2>

        <p className="mt-5">
          By:
          <a href="#" className="text-red-600">
            {" "}
            Ankush Gulati{" "}
          </a>
          ,
          <a href="#" className="text-red-600">
            {" "}
            David Gevorkyan{" "}
          </a>
        </p>

        <p>
          Additional credits:
          <a href="#" className="text-red-600">
            {" "}
            Michael Clark{" "}
          </a>
          ,
          <a href="#" className="text-red-600">
            {" "}
            Gokhan Ozer{" "}
          </a>
        </p>

        <h3 className="font-bold text-xl mt-8">  </h3>
        <p className="font-light">
          {blog.body}
        </p>

        <Link href={`/edit/${id}`} className="bg-zinc-800 text-white font-semibold py-2 px-5 text-sm mt-6 inline-flex items-center group">
          <p> Edit </p>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1 group-hover:translate-x-2 delay-100 duration-200 ease-in-out"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg> */}
        </Link>
      </div>
    </div>
  );
}
