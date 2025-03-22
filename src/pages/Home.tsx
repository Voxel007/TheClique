import React from "react";
import { Link } from "react-router-dom";
import EventCard from "../components/Cards/EventCard";
import SearchBar from "../components/SearchBar";

// icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Tour from "@mui/icons-material/Tour";

const Home: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="flex h-screen w-100 transform flex-col items-center rounded-2xl bg-amber-200">
        <section className="my-3 flex flex-col items-start">
          {/* Profile Section */}
          <section className="flex items-start justify-center">
            <img src="src\assets\ProfilePictures\Avatar.svg"></img>
            <section className="flex-col px-2 text-left">
              <h2 className="pd+2 text-white">Hi Alexander</h2>
              <section className="flex">
                <LocationOnIcon sx={{ fontSize: 12 }} />
                <h4>Cologne</h4>
              </section>
            </section>
          </section>

          {/* Search Bar Block */}
          <div className="text-left">
            <h3 className="text-white">Find Amazing Events near you</h3>
            <section className="flex">
              <Tour sx={{ fontSize: 12 }} className="pb-1" />
              <h6 className="text-left">12 Events around you</h6>
            </section>
            <section className="flex justify-center">
              <SearchBar width="w-full" />
            </section>
          </div>
        </section>

        {/* Content in Green Section */}
        <section className="h-500 w-100 transform rounded-2xl bg-green-200">
          <h3>Events Hosted by your Friends</h3>
          <section className="flex gap-2 px-2">
            <EventCard></EventCard>
            <EventCard></EventCard>
          </section>
          <h3>Professional Events</h3>
        </section>

        {/* Navigation Link */}
        <li>
          <Link to="/event">Link From Home to Event</Link>
        </li>
      </div>
    </div>
  );
};

export default Home;
