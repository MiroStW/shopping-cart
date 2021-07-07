import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/time">Time</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;

// berlin, less common background, founder for 8 years, CSS tailwind, grid
// ress boss syntax podcast / courses
