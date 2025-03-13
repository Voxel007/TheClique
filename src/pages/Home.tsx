import React from "react";
import { Link } from "react-router-dom";
import EventCard from "../components/EventCard";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Hi Alexander</h1>
      <h2>Find Amazing Events near you</h2>
      <h3>12 Events around you</h3>
      <h4>SearchBar</h4>
      <h5>Events Hosted by your Friends</h5>
      <h6>Professional Events</h6>
      <EventCard></EventCard>

      <li>
        <Link to="/event">Link From Home to Event</Link>
      </li>
      {/* <div className="rounded-lg bg-yellow-300 p-6 text-red-500 shadow-md">
        Tailwind Sorting Test
      </div> */}
    </div>
  );
};

export default Home;
