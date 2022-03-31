import React from "react";

function SearchImage(props) {
  return (
    <img
      src={props.img}
      style={{
        width: "32px",
        height: "32px",
      }}
    />
  );
}

export default SearchImage;
