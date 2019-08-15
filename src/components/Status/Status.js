import React from "react";
import "./Status.css";
import Title from "../UI/Title/Title";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const Status = () => {
  return (
    <div>
      <Title title="Status" />
      <Input />
      <Button name="DELIVERED" />
    </div>
  );
};

export default Status;
