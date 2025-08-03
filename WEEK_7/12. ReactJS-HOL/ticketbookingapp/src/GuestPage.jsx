import React from "react";

const GuestPage = ({ onClick }) => {
  return (
    <div>
      <h1>Guest Page</h1>
      <h3>Flight Details present here</h3>
      <h3>Please sign in to book tickets</h3>
      <button
        onClick={() => {
          onClick();
        }}
      >
        Login
      </button>
    </div>
  );
};

export default GuestPage;
