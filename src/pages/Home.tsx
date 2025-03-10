import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Hi Alexander</h1>
      <h2>Find Amazing Events near you</h2>
      <h6>12 Events around you</h6>
      <div>SearchBar</div>

      <li>
        <Link to="/event">Link From Home to Event</Link>
      </li>
      <div className="rounded-lg bg-yellow-300 p-6 text-red-500 shadow-md">
        Tailwind Sorting Test
      </div>
    </div>
  );
};

export default Home;
