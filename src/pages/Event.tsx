import React from "react";
import EventDetailCard from "../components/Cards/EventDetailCard";
import OrganizerCardWide from "../components/Cards/OrganizerCardWide";

const Event: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="flex h-80 w-100 flex-col items-center justify-around rounded-2xl bg-amber-200 p-1">
        <section>
          <h3>Event Details</h3>
          <EventDetailCard></EventDetailCard>
        </section>
        <OrganizerCardWide></OrganizerCardWide>
      </div>
      <section className="flex h-80 w-100 flex-col justify-around rounded-2xl bg-green-200 p-1 px-10 text-left">
        <section>
          <h3>About this Event</h3>
          <h6>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting
          </h6>
        </section>
        <section>
          <h3>Location</h3>
          <img src="src\assets\OtherPictures\MapEssen.png"></img>
        </section>
        <section className="flex justify-center gap-10 py-3">
          <button className="rounded-lg bg-gray-500 px-4 py-2 text-white hover:bg-gray-600">
            join
          </button>
          <button className="rounded-lg bg-gray-500 px-4 text-white hover:bg-gray-600">
            unsure
          </button>
          <button className="rounded-lg bg-gray-500 px-4 text-white hover:bg-gray-600">
            View Network
          </button>
        </section>
      </section>
    </div>
  );
};

export default Event;
