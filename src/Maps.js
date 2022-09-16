import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

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
          mapboxAccessToken="pk.eyJ1IjoibmF5b2JhZXoiLCJhIjoiY2w4NHVxNHNoMDNoYzNvbHQ1MXE5cnd0ciJ9.grPjQHHspWWfEOx3aZWIRg"
          {...viewport}
          initialViewState={(newView) => {
            setViewport(newView);
          }}
          style={{ width: 315, height: 165 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        />
      </div>
    </section>
  );
}
