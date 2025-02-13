import React from "react";
import styles from "../style/Blog.module.css";

const Pagination: React.FC = () => {
  return (
    <div
      className={`flex items-start justify-between  bg-white px-4 py-3 sm:px-6 ${styles.pagination}`}
    >
      {/* Mobile Navigation */}
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-full border border-gray-700 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <nav
            aria-label="Pagination"
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          >
            {/* Previous */}
            <a
              href="#"
              className={`relative bg-indigo-600 z-30 inline-flex items-center rounded-full px-8 py-3 text-gray-400 ring-1   ${styles.prev}`}
              style={{ width: "100px", height: "50px" }} // Ellipse style
            >
              <span>prev</span>
            </a>

            {/* Page Numbers */}
            <a
              href="#"
              aria-current="page"
              className="relative inline-flex items-center px-5 py-3 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-none rounded-lg"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-5 py-3 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-none rounded-lg"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center px-5 py-3 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-none rounded-lg md:inline-flex"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-5 py-3 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset rounded-lg">
              ...
            </span>
            <a
              href="#"
              className="relative hidden items-center px-5 py-3 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-white-50 focus:z-20 focus:outline-none rounded-lg md:inline-flex"
            >
              16
            </a>

            {/* Next */}
            <a
              href="#"
              className={`relative bg-indigo-600 z-30 inline-flex items-center mr-2 rounded-full px-8 py-3 text-gray-400 ring-1   ${styles.next}`}
            >
              <span>next</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
