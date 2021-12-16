import React, { useState } from "react";
import "./NoteItem.css";
import { Link } from "react-router-dom";
const NoteItem = ({ content, date, time, onItemClicked }) => {
  const [read, setRead] = useState(true);

  const toggleRead = () => {
    setRead(!read);
  };

  return (
    <div className="NoteItem__container" role="button" onClick={onItemClicked}>
      <div className="content">
        <p>{content}</p>
      </div>
      <div className="below">
        <button className="btn btn-success btn-sm" onClick={toggleRead}>
          {read ? "More" : "Less"}
        </button>
        <br />
        <p>{time},</p>
        <p className="date">{date}</p>
      </div>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link
                className="nav-Link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                {/* dropdown */}
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/usernote">
                  View All
                </Link>
                <Link className="dropdown-item" to="/usernote">
                  Update
                </Link>
                <Link className="dropdown-item" to="/usernote">
                  Delete
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NoteItem;
