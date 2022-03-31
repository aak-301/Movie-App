import React from "react";

function MovieImage(props) {
  return (
    <img
      src={props.img}
      style={{
        width: "48px",
        height: "48px",
        margin: "15px",
      }}
    />
  );
}

export default MovieImage;
