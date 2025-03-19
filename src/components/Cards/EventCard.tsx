import React from "react";
import { Link } from "react-router-dom";

interface EventCardProps {
  title?: string;
  location?: string;
  imageURL?: string;
  link?: string;
}

function EventCard({ title, location, imageURL, link }: EventCardProps) {
  title = "Pool Party";
  location = "Köln-Str 5";
  imageURL = "src/assets/EventThumbnails/PoolPicture.jpg";
  link = "/event";

  return (
    <Link to={link} className="block">
      <main className="h-55 w-60 cursor-pointer flex-col rounded-2xl bg-white pt-0.75 text-left transition-transform hover:scale-102 hover:shadow-lg active:scale-95">
        <img
          src={imageURL}
          className="aspect-[4/3] w-full scale-90 rounded-2xl object-cover"
        />
        <div className="px-4">
          <header>{title}</header>
          <section className="flex">
            <h5 className="flex-grow">{location}</h5>
          </section>
          <div className="my-1 h-1 w-full rounded-2xl bg-gray-400"></div>
          <section className="my-1 flex font-medium text-gray-500">
            <h4>3 friends joined</h4>
            <h4 className="px-3">1 friend unsure</h4>
          </section>
        </div>
      </main>
    </Link>
  );
}
export default EventCard;
