import Link from "next/link";

export default function NavBar() {
  return <nav className="relative select-none bg-zinc-700 py-4 lg:flex lg:items-stretch w-full lg:justify-end">
    <div className="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
      <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
        <Link
          href={"/"}
          className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark"
        >
          Blogs
        </Link>
        <Link
          href={"/add"}
          className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark"
        >
          Add Blog
        </Link>
      </div>
    </div>
  </nav>;
}
