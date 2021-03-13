import React from "react";
import EditEvent from "./EditEvent";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
interface RowProps {
  event: {
    title: string;
    time: string;
    address: string;
    date: Date;
    _id: string;
  };
}

const EventsTableRow: React.FC<RowProps> = ({ event }) => {
  const { title, time, address, date, _id } = event;
  var newDate = new Date(event.date).toISOString().split("T")[0];
  const history = useHistory();
  const onClick = () => {
    history.push({
      pathname: "/event",
      state: { event: event },
    });
  };
  return (
    <tr>
      <th>{title}</th>
      <td>{time}</td>
      <td>{address}</td>
      <td>{newDate}</td>
      <td>
        <button className="button is-primary" onClick={onClick}>
          Edit
        </button>
      </td>
    </tr>
  );
};

export default EventsTableRow;
