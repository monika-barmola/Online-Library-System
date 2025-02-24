import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold flex items-center">
          📚 Online Library
        </h1>
        <div className="space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/books/fiction" className="hover:text-gray-300">Browse Books</Link>
          <Link to="/add-book" className="hover:text-gray-300">Add Book</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
