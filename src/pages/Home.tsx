import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Hello Home</h1>
      <li>
        <Link to="/event">Link From Home to Event</Link>
      </li>
    </div>
  );
};

export default Home;
