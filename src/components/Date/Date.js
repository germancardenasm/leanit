import React from "react";
import { format } from "date-fns";

import "./Date.css";

const Date = props => {
  return (
    <div className="date">
      <p>{format(props.date, "dddd Qo hh:mm A")}</p>
    </div>
  );
};

export default Date;
