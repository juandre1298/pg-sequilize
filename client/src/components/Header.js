import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <h1>First fullstack app</h1>
      <nav>
        <Link className="navBtn" to="/">
          Home
        </Link>

        <Link className="navBtn" to="/login">
          login
        </Link>
      </nav>
    </header>
  );
};
