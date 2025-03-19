import React from "react";
import DateLocationCard from "./DateLocationCard";

interface EventCardProps {}

function OrganizerCardWide({}: EventCardProps) {
  return (
    <div className="my-1 flex h-10 w-60 items-center justify-between rounded-2xl bg-white p-1">
      <img
        src="src\assets\ProfilePictures\Avatar.svg"
        className="scale-50"
      ></img>
      <section>
        <h4>Organizer</h4>
        <h3>Max Musterman</h3>
      </section>
      <h6>logos</h6>
    </div>
  );
}
export default OrganizerCardWide;
