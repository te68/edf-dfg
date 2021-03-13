import React from "react";
import Login from "./Login";

const EditEvent: React.FC = (props: any) => {
  const event = props.history.location.state.event;
  var date = new Date(event.updatedAt).toISOString().split("T")[0];
  console.log(date);

  console.log(event);
  return <div>{event.title}</div>;
};

export default EditEvent;
