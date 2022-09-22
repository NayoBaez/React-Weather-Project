import React, { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function Maps(props) {
  let [loaded, setLoaded] = useState(false);
  let [viewport, setViewport] = useState({
    latitude: props.coordinates.lat,
    longitude: props.coordinates.lon,
    zoom: 10,
  });

  useEffect(() => {
    setLoaded(false);
    setViewport({
      latitude: props.coordinates.lat,
      longitude: props.coordinates.lon,
      zoom: 10,
    });
  }, [props.coordinates]);

  function Reload() {
    setLoaded(true);
  }

  if (loaded) {
    return (
      <section>
        <div className="Maps">
          <ReactMapGL
            mapboxAccessToken="pk.eyJ1IjoibmF5b2JhZXoiLCJhIjoiY2w4NHVxNHNoMDNoYzNvbHQ1MXE5cnd0ciJ9.grPjQHHspWWfEOx3aZWIRg"
            style={{ width: 315, height: 165 }}
            mapStyle="mapbox://styles/nayobaez/cl850n2k6002n14qkpfch5def"
            onMove={(evt) => setViewport(evt.viewport)}
            {...viewport}
          />
        </div>
      </section>
    );
  } else {
    Reload();
    return null;
  }
}
