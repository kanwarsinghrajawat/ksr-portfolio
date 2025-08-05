import Link from "next/link";
import React from "react";
const BookCall = () => {
  return (
    <div className="flex justify-center items-center  bg-orange-500">
      <div className="p-1 rounded-lg  w-full">
        <span className="text-black">Available for new projects,</span>
        <Link
          href="https://calendly.com/builders-club/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-black px-1 rounded transition-colors underline"
        >
          get in touch!
        </Link>
      </div>
    </div>
  );
};
export default BookCall;
