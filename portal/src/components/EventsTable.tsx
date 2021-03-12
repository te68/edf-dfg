import React, { useEffect, useState } from "react";
import axios from "axios";

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
  return (
    <section className="section" id="table">
      <h1 className="title">Events </h1>
      <hr />
      {events.map((event) => {
        return <h5>{event.title}</h5>;
      })}
      <table className="table">
        <thead>
          <tr>
            <th>
              <a>Title</a>
            </th>
            <th>Time</th>
            <th>address</th>
            <th>Date</th>
          </tr>
        </thead>
      </table>
    </section>
  );
};

export default EventsTable;
