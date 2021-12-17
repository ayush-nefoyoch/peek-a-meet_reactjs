import React, { useState } from "react";
import "./NoteItem.css";

import { useSelector } from "react-redux";
import { Dropdown } from "./Dropdown";
const NoteItem = ({ content, date, time, onItemClicked }) => {
  const [read, setRead] = useState(true);

  const toggleRead = () => {
    setRead(!read);
  };

  return (
    <>
      <div
        className="NoteItem__container"
        role="button"
        onClick={onItemClicked}
      >
        <div className="textNote">
          <div className="content">
            <p>{read ? content.slice(0, 70) : content}</p>
          </div>
          <div className="below">
            <button className="btn btn-success btn-sm" onClick={toggleRead}>
              {read ? "More" : "Less"}
            </button>
            <br />
            <p>{time},</p>
            <p className="date">{date}</p>
          </div>
          <Dropdown />
        </div>
      </div>
    </>
  );
};

export default NoteItem;
