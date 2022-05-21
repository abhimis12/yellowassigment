import React from "react";

const Hotel = (props) => {
  return (
    <div className="hotel-tile">
      <div className="rest-rating">
        <p></p>
        <div>{props.votes}votes</div>
      </div>
      <div className="rest-details">
        <h2 className="rest-name">{props.name}</h2>
        <div className="rest-loc">{props.locality}</div>
        <div className="rest-add">{props.address}</div>
        <hr />
        <div className="rest-cusines">
          <strong></strong> {props.cuisines}
        </div>
        <div className="rest-cost">
          <strong>Price</strong>
          {props.cost}
        </div>
      </div>
    </div>
  );
};

export default Hotel;
