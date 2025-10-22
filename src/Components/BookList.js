import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/books/")
      .then((res) => {
        console.log("Books fetched:", res.data); // check browser console
        setBooks(res.data);
      })
      .catch((err) => console.log("Fetch error:", err));
  }, []);
  if (books.length === 0) {
    return <p>Loading books...</p>;
  }

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookList;
