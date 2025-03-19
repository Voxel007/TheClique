import React from "react";
import { Link } from "react-router-dom";
import EventCard from "../components/Cards/EventCard";
import SearchBar from "../components/SearchBar";

const Home: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="h-screen w-100 transform rounded-2xl bg-amber-200">
        <section className="p-2">
          <section className="flex items-start justify-center">
            <img src="src\assets\ProfilePictures\Avatar.svg"></img>
            <section className="flex-col px-2 text-left">
              <h2 className="pd+2 text-white">Hi Alexander</h2>
              <section className="flex">
                <h4>Cologne iodf</h4>
              </section>
            </section>
          </section>
          <h2 className="text-white">Find Amazing Events near you</h2>
          <h6 className="text-left">12 Events around you</h6>
          <section className="flex justify-center">
            <SearchBar />
          </section>
        </section>

        <section className="h-500 w-100 transform rounded-2xl bg-green-200">
          <h3>Events Hosted by your Friends</h3>
          <section className="flex gap-2 px-2">
            <EventCard></EventCard>
            <EventCard></EventCard>
          </section>
          <h3>Professional Events</h3>
        </section>

        <li>
          <Link to="/event">Link From Home to Event</Link>
        </li>
      </div>
    </div>
  );
};

export default Home;
