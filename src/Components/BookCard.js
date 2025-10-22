import React from 'react';

function BookCard({ book }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: 10, borderRadius: 8, margin: 10, width: 200 }}>
      <img 
        src={book.cover_image || "https://via.placeholder.com/150"} 
        alt={book.title} 
        style={{ width: '100%', borderRadius: 5 }} 
      />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>
        ⭐ {book.reviews.length ? (book.reviews.reduce((a,b)=>a+b.rating,0)/book.reviews.length).toFixed(1) : 0} 
      </p>
    </div>
  );
}

export default BookCard;
