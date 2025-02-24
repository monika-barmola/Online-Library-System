import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const BrowseBooks = () => {
  const { category } = useParams();
  const books = useSelector(state => state.books);
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800">Books in {category}</h2>

      <input
        type="text"
        placeholder="Search by title or author..."
        className="mt-4 p-2 w-full border rounded-lg"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => (
            <div key={book.id} className="p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">{book.title}</h3>
              <p className="text-gray-600">by {book.author}</p>
              <Link to={`/book/${book.id}`} className="text-blue-500 hover:underline">View Details</Link>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No books found.</p>
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;
