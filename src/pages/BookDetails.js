import React from "react";
import { useSelector } from "react-redux";

const BookDetails = ({ searchTerm }) => {
  const books = useSelector((state) => state.books) || [];

  if (!books || !Array.isArray(books)) {
    return <p>Loading books...</p>;
  }

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="book-container">
      <h2>Available Books</h2>
      {filteredBooks.length > 0 ? (
        <ul className="book-list">
          {filteredBooks.map((book) => (
            <li key={book.id} className="book-card">
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Category:</strong> {book.category}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
};

export default BookDetails;
