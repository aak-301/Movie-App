import React from "react";

function PlaceHolderImage(props) {
  return (
    <img
      src={props.img}
      style={{
        width: "120px",
        height: "120px",
        margin: "150px",
        opacity: "50%",
      }}
    />
  );
}

export default PlaceHolderImage;
