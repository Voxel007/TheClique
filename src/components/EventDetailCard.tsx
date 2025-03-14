import React from "react";

interface EventCardProps {
  title?: string;
  location?: string;
  date?: string;
  imageURL?: string;
}

function EventDetailCard({ title, location, imageURL, date }: EventCardProps) {
  title = "Pool Party";
  location = "Köln-Str 5";
  date = "Dec 30, 2024";
  imageURL = "src/assets/EventThumbnails/PoolPicture.jpg";

  return (
    <main className="h-50 w-50 transform flex-col rounded-2xl bg-white pt-0.75 text-center transition-transform hover:scale-102">
      <img
        src={imageURL}
        className="aspect-[4/3] w-full scale-90 rounded-2xl object-cover"
      />
      <div className="px-4">
        <header>{title}</header>

        <div className="my-1 flex h-10 w-full justify-around rounded-lg bg-gray-500">
          <section className="">
            <h4 className="text-gray-400">Date</h4>
            <h5 className="text-white">{date}</h5>
          </section>
          {/* vertical bar */}
          <div className="h10 w10 rounded-2xl bg-amber-800"></div>
          <section>
            <h4 className="text-gray-400">Location</h4>
            <h5 className="text-white">{location}</h5>
          </section>
        </div>
      </div>
    </main>
  );
}
export default EventDetailCard;
