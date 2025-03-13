import React from "react";

interface EventCardProps {
  title?: string;
  location?: string;
  imageURL?: string;
}

function EventCard({ title, location, imageURL }: EventCardProps) {
  title = "Pool Party";
  location = "Köln-Str 5";
  imageURL = "src/assets/EventThumbnails/PoolPicture.jpg";

  return (
    <main className="text-lefttransform h-70 w-60 flex-col rounded-2xl bg-white pt-0.75 transition-transform hover:scale-102">
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
  );
}
export default EventCard;
