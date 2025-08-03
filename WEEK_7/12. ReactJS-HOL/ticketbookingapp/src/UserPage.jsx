import React from "react";

const UserPage = ({ onClick }) => {
  return (
    <div>
      <h1>User Page</h1>
      <h3>Book Tickets here</h3>
      <button
        onClick={() => {
          onClick();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserPage;
