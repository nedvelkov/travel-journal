import React from "react";
import pin from "../icons/pin.png";

function Card(props) {
  return (
    <>
      <div className="card-container">
        <img src={props.imageUrl} alt={props.title} />
        <div className="card-info">
          <div>
            <img src={pin} alt="pin" />
            <span className="card-location">{props.location}</span>
            <a href={props.googleMapsUrl} className="mapsAnchor">
              View on Google Maps
            </a>
          </div>
          <h1 className="card-title">{props.title}</h1>
          <h3 className="card-dates">
            {props.startDate}-{props.endDate}
          </h3>
          <p className="card-description">{props.description}</p>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Card;
