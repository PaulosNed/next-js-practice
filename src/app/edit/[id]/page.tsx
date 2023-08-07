import { Blog } from "@/models/blog";
import { createBlog, editBlog, getBlog } from "@/services/BlogService";
import Link from "next/link";
import React from "react";


export default async function Blog({ params }: { params: { id: number } }) {
  const id: number = params.id;
  const blog: Blog = await getBlog(id);

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <form action={editBlog}>
          <div className="mb-5">
            <input type="number" name="id" id="id" className="hidden" defaultValue={id}/>
            <input type="number" name="userId" id="userId" className="hidden" defaultValue={blog.userId}/>
            <label
              htmlFor="title"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              defaultValue={blog.title}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="body"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Content
            </label>
            <textarea
              rows={4}
              name="body"
              id="body"
              defaultValue={blog.body}
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div>
            <button className="hover:shadow-form rounded-md bg-zinc-800 py-3 px-8 text-base font-semibold text-white outline-none">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
