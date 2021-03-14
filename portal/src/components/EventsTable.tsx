import React, { useEffect, useState } from "react";
import axios from "axios";
import EventsTableRow from "./EventTableRow";

const EventsTable: React.FC = () => {
  const [events, setEvents] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get("https://youth-activism-app-server.herokuapp.com/api/event", {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
      })
      .then(async (response) => {
        await setEvents(response.data.events);
      });
    console.log(events);
  }, []);

  const renderContent = () => {
    if (!events.length) return <h1>Loading</h1>;

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
          <tbody>{renderContent()}</tbody>
        </table>
      </section>
    </div>
  );
};

export default EventsTable;
