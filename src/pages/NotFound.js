import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center py-12">
      <h1 className="text-5xl font-extrabold text-red-600">404</h1>
      <p className="text-lg text-gray-700">Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
