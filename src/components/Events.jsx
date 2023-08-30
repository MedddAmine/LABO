import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const Events = () => {
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Upcoming Events</h1>
      <div className="">
        {events.map((event) => (
          <Event key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
};

const events = [
  {
    id: 1,
    date: "June 29, 2023",
    title: "Lab Alchemy: Chemical Wonders Unveiled",
    details: "Learn about...",
  },
  {
    id: 2,
    date: "July 5, 2023",
    title: "Astronomy Night at the Planetarium",
    details: "Join us for...",
  },
  {
    id: 3,
    date: "July 5, 2023",
    title: "Astronomy Night at the Planetarium",
    details: "Join us for...",
  },
  {
    id: 4,
    date: "July 5, 2023",
    title: "Astronomy Night at the Planetarium",
    details: "Join us for...",
  },
];

function Event({ event }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-b p-4">
      <h1 className="flex items-center justify-between">
        <div className="flex items-center justify-between">
          <div className="text-sm w-28 font-medium text-gray-500 mr-4 ">
            {event.date}
          </div>
          <h3 className="text-lg font-semibold">{event.title}</h3>
        </div>
        <button onClick={() => setExpanded(!expanded)}>
          <BsChevronDown
            style={{ transform: expanded ? "rotate(180deg)" : "none" }}
          />
        </button>
      </h1>

      {expanded && <p className="mt-4">{event.details}</p>}
    </div>
  );
}

export default Events;
