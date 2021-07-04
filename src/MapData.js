import React from "react";

const MapData = (props) => {
  return props.userData.map((data) => {
    return (
      <div>
        <h1>{data}</h1>
      </div>
    );
  });
};

export default MapData;
