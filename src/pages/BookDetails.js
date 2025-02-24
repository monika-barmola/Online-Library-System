import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BookDetails = () => {
  const { id } = useParams();
  const book = useSelector(state => state.books.find(b => b.id === id));

  if (!book) return <p className="text-center text-gray-600">Book not found.</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold">{book.title}</h2>
        <p className="text-gray-700 mt-2">by {book.author}</p>
        <p className="mt-4">{book.description}</p>
        <div className="mt-4">
          <span className="font-bold">Rating: </span> ⭐ {book.rating}
        </div>
        <Link to="/books/fiction" className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Back to Browse
        </Link>
      </div>
    </div>
  );
};

export default BookDetails;
