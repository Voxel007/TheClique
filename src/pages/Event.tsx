import React from "react";
import EventDetailCard from "../components/EventDetailCard";

const Event: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="h-screen w-100 flex-col rounded-2xl bg-amber-200">
        <h3>Event Details</h3>
        <EventDetailCard></EventDetailCard>
        <br></br>
        <section className="h-500 w-100 flex-col rounded-2xl bg-green-200 px-10 py-5 text-left">
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
          <h4>About this Event</h4>
          <h6>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting
          </h6>
          <h4>Location</h4>
        </section>
      </div>
    </div>
  );
};

export default Event;
