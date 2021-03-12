import React, { useEffect } from "react";
import axios from "axios";

const EventsTable: React.FC = () => {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/event", {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
      })
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <section className="section" id="table">
      <h1 className="title">Events</h1>
      <hr />
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
