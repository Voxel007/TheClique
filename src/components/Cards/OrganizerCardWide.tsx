import React from "react";
// import DateLocationCard from "./DateLocationCard";
import MessageIcon from "@mui/icons-material/Message";

interface EventCardProps {}

function OrganizerCardWide({}: EventCardProps) {
  return (
    <div className="flex h-10 w-60 items-center justify-around rounded-2xl bg-white text-left">
      <img
        src="src\assets\ProfilePictures\Avatar.svg"
        className="scale-50"
      ></img>
      <section>
        <h4>Organizer</h4>
        <h3>Max Musterman</h3>
      </section>
      <MessageIcon sx={{ fontSize: 12 }} />
    </div>
  );
}
export default OrganizerCardWide;
