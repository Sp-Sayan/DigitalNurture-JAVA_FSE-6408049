import React from "react";
import { books } from "../Books";

const BookDetails = () => {
  const bookdata = (
    <ul>
      {books.map((item) => (
        <div key={item.id}>
          <h3>{item.bname}</h3>
          <h4>{item.price}</h4>
        </div>
      ))}
    </ul>
  );

  return (
    <div>
      <div className="book-details">
        <h1>Book Details</h1>
        {bookdata}
      </div>
    </div>
  );
};

export default BookDetails;
