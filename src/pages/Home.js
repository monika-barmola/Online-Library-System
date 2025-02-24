import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="text-center bg-white shadow-lg p-10 rounded-lg">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Welcome to the Online Library 📖
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Find and explore your favorite books easily.
        </p>
        <Link to="/books/fiction" className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
          Browse Books
        </Link>
      </div>
    </div>
  );
};

export default Home;
