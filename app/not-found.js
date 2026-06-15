import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-orange-500 text-5xl font-extrabold">404</h1>
      <p className="text-black font-bold">Page not found</p>
      <span>
        Oops! The page you're looking for doesn't exist. It might have been
        moved or deleted.
      </span>
      <Link href={"/"}>
        {" "}
        <button className="px-4 py-2 bg-orange-500 text-white rounded-lg">
          Go Back Home
        </button>
      </Link>{" "}
    </div>
  );
}

export default NotFound;
