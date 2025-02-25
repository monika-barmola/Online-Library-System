import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BrowseBooks = () => {
  const { category } = useParams();
  const books = useSelector((state) => state.books.books);
  const filteredBooks = books.filter((book) => book.category === category);

  return (
    <div>
      <h1>{category} Books</h1>
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseBooks;
