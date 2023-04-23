import React from "react";
import { Link } from "react-router-dom";
export default function Header({ back }) {
  return (
    <header className="header">
      <div className="width">
        {back && (
          <Link to="/market">
            <svg
              className="absolute top-50 left-16 mt-1 md:mx-40 lg:mx-60"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="24"
            >
              <path
                fill="currentColor"
                d="M28 44 0 24 20 4l2.8 2.85L5.65 24 22.8 41.15Z"
              />
            </svg>
          </Link>
        )}
        <h1>
          <Link to="">Market Place</Link>
        </h1>
      </div>
    </header>
  );
}
