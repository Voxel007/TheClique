import React from "react";

interface EventCardProps {
  location?: string;
  date?: string;
}

function DateLocationCard({ location, date }: EventCardProps) {
  location = "Köln-Str 5";
  date = "Dec 30, 2024";

  return (
    <div className="my-1 h-9 w-full rounded-lg bg-gray-500">
      <section className="flex h-full w-full justify-around p-1">
        <section>
          <h6 className="text-gray-400">Date</h6>
          <h4 className="text-white">{date}</h4>
        </section>
        {/* vertical bar */}
        <section className="flex items-center">
          <div className="h-full w-0.5 rounded-2xl bg-gray-400"> </div>
        </section>

        {/* Parent */}
        <section>
          <h6 className="text-gray-400">Location</h6>
          {/* Child */}
          <h4 className="whitespace-nowrap text-white">{location}</h4>
        </section>
      </section>
    </div>
  );
}
export default DateLocationCard;
