import { SingleBlog } from "@/components/SingleBlog";
import { Blog } from "@/models/blog";
import { getBlogs } from "@/services/BlogService";

// const endpoint = 'http://localhost:4000/posts';

// export async function getBlogs() {
//   const res = await fetch(`${endpoint}`, {
//     cache: 'no-store', // Revalidate every 60 seconds
//   });
//   return res.json();
// }

export default async function Home() {
  const blogs: Blog[] = await getBlogs()
  
  return (
    <div className="w-3/4 mx-auto bg-gray-200">
      <div className="flex flex-col gap-4 items-center">
        {blogs &&
          blogs.map((blog: Blog) => (
            <SingleBlog
              key={blog.id}
              userId={blog.userId}
              id={blog.id}
              title={blog.title}
              body={blog.body}
            />
          ))}
      </div>
    </div>
  );
}


// export const getStaticProps: GetStaticProps<{ blogs: Blog[] }> = async () => {
//   const blogs: any = await getBlogs()

//   return {
//     props: { blogs },
//   };
// };
