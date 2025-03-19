import React from "react";
import DateLocationCard from "./DateLocationCard";

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
    <main className="h-50 w-50 flex-col rounded-2xl bg-white pt-0.75 text-center">
      <img
        src={imageURL}
        className="aspect-[4/3] w-full scale-90 rounded-2xl object-cover"
      />
      <div className="px-4">
        <header>{title}</header>
        <DateLocationCard></DateLocationCard>
      </div>
    </main>
  );
}
export default EventDetailCard;
