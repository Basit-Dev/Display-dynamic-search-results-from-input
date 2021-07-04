import React from "react";

const MapData = (props) => {
  return props.userData.map((data, idx) => {
    return (
      <div key={idx}>
        <h1>{data}</h1>
      </div>
    );
  });
};

export default MapData;
