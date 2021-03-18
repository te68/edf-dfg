import React, { useEffect, useState } from "react";
import axios from "axios";
import EventsTableRow from "./EventTableRow";

const EventsTable: React.FC = () => {
  const [events, setEvents] = useState<any[]>([]);
  useEffect(() => {
    fetchEvents();
  }, []);
  const fetchEvents = () => {
    axios.get("/api/event", {}).then(async (response) => {
      await setEvents(response.data.events);
    });
    console.log(events);
  };
  const renderContent = () => {
    if (!events.length)
      return (
        <progress className="progress is-small is-primary" max="100">
          15%
        </progress>
      );

    const renderedEvents = events.map((event) => {
      return <EventsTableRow event={event} key={event._id} />;
    });
    return renderedEvents;
  };
  const newEventClick = async () => {
    await axios.post("/api/event", {
      title: "Empty",
      date: "2022-05-05",
      time: "Empty",
      address: "Empty",
      description: "Empty",
      categories: [""],
      url: "https://www.example.com",
    });
    fetchEvents();
  };
  return (
    <div>
      <section className="section" id="table">
        <h1 className="title">Events </h1>
        <table className="table">
          <thead>
            <tr>
              <th>
                <a>Title</a>
              </th>
              <th>Time</th>
              <th>address</th>
              <th>Date</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <tr>
                <button className="button is-success" onClick={newEventClick}>
                  + New Event
                </button>
              </tr>
            </tr>
          </tfoot>
          <tbody>{renderContent()}</tbody>
        </table>
      </section>
    </div>
  );
};

export default EventsTable;
