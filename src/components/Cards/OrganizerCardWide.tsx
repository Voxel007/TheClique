import React from "react";
// import DateLocationCard from "./DateLocationCard";
import MessageIcon from "@mui/icons-material/Message";

interface EventCardProps {}

function OrganizerCardWide({}: EventCardProps) {
  return (
    <div className="flex h-10 w-60 flex-row items-center justify-between rounded-2xl bg-white text-left">
      {/* Left Side */}
      <section className="flex flex-row items-center pl-2">
        <img src="src/assets/ProfilePictures/Avatar.svg" className="h-8" />
        <section className="ml-2">
          <h4 className="text-sm">Organizer</h4>
          <h3 className="text-base">Max Musterman</h3>
        </section>
      </section>

      {/* Right Side */}
      <MessageIcon sx={{ fontSize: 20 }} className="pr-2" />
    </div>
  );
}
export default OrganizerCardWide;
