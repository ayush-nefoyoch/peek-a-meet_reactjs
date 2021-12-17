import React from "react";
import { Link } from "react-router-dom";
import { UserHeader } from "./UserHeader";
import "./UserProfile.css";
import "./UserHeader.css";
import { UserDetails } from "../../User/UserDetails";

export const Details = () => {
  return (
    <div className="detailsNotes">
      {/* <UserHeader/> */}
      <ul>
        <div className="detailsSection">
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/details"
              className="link"
            >
              Details
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/notes"
              className="link"
            >
              Notes
            </Link>
          </li>
        </div>
      </ul>
      <UserDetails />
      <hr />
    </div>
  );
};
