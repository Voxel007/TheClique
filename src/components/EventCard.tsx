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
    <div className="bg-grey-200 rounded-b-2xlp-2 h-24 w-48 items-center justify-center rounded-2xl bg-amber-600 text-center">
      <img src={imageURL} />
      <header>{title}</header>

      <div>{location}</div>
    </div>
  );
}
export default EventCard;
