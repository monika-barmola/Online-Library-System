import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav><center>
      <Link to="/">Home   </Link>
      <Link to="/books/Fiction">Browse Books  </Link>
      <Link to="/add-book">Add Book  </Link>
      </center></nav>
  );
};

export default Navbar;
