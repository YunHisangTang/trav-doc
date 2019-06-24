import React from "react";

const SideBar = ({ places }) => (
  <ul className="sidebar__context">
    {places.length > 0 &&
      places.map(place => (
        <li style={{ margin: "10px" }} key={place.place_id}>
          <h1> {place.name} </h1> <p> {place.formatted_address} </p>{" "}
        </li>
      ))}{" "}
  </ul>
);
export default SideBar;
