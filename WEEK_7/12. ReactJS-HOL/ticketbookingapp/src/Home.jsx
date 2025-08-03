import React, { useState } from "react";
import UserPage from "./UserPage";
import GuestPage from "./GuestPage";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <UserPage onClick={handleLogout} />;
  } else return <GuestPage onClick={handleLogin} />;
};

export default Home;
