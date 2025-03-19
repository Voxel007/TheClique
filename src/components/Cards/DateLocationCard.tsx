import React from "react";

interface EventCardProps {
  location?: string;
  date?: string;
}

function DateLocationCard({ location, date }: EventCardProps) {
  location = "Köln-Str 5";
  date = "Dec 30, 2024";

  return (
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
  );
}
export default DateLocationCard;
