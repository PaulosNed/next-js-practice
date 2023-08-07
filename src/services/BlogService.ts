import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

const endpoint = 'http://localhost:4000/posts';

export async function getBlogs() {
  const res = await fetch(`${endpoint}`, {
    cache: 'no-store', // Revalidate every 60 seconds
  });
  return res.json();
}

export const getBlog = async (id: number) => {
    const res = await fetch(`${endpoint}/${id}`, {
        cache: 'no-store', // Revalidate every 60 seconds
      });
    return res.json();
  };

export async function editBlog(data: FormData) {
  "use server";

  const submission = {
    id: data.get("id")?.valueOf(),
    userId: data.get("userId")?.valueOf(),
    title: data.get("title")?.valueOf(),
    body: data.get("body")?.valueOf(),
  };

  const id = data.get('id')?.valueOf()

  const res = await fetch(`${endpoint}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(submission),
  });

  const response = await res.json()
  console.log(response) 

  redirect("/");
}

export async function createBlog(data: FormData) {
  "use server";

  const submission = {
    id: Date.now(),
    userId: 2,
    title: data.get("title")?.valueOf(),
    body: data.get("body")?.valueOf(),
  };

  await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(submission),
  });

  redirect("/");
}
