import React from "react";
import { Link } from "react-router-dom";

const categories = ["Fiction", "Non-Fiction", "Science", "History", "Biography", "Fantasy"];

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">📚 Welcome to the Online Library</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-3">Categories:</h2>
        <ul className="space-y-3">
          {categories.map((category) => (
            <li key={category}>
              <Link
                to={`/books/${category}`}
                className="block bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};




export default Home;
