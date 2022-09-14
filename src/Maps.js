import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

export default function Maps(props) {
  const [viewport, setViewport] = useState({
    latitude: props.coordinates.lat,
    longitude: props.coordinates.lon,
    zoom: 10,
  });
  return (
    <section>
      <div className="Maps">
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onViewportChange={(viewport) => {
            setViewport(viewport);
          }}
        />
      </div>
    </section>
  );
}
