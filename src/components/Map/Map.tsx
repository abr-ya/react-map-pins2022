import { useState } from "react";
import MapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Markers from "components/Markers/Markers";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 50,
    longitude: 17,
    zoom: 3,
  });

  const mapClickHandler = (e) => {
    console.log(e.lngLat);
  };

  return (
    <div className="map-wrapper">
      <MapGL
        mapboxApiAccessToken={process.env.MAP_KEY}
        {...viewport}
        onViewportChange={(next: any) => setViewport(next)}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        width="100%"
        height="100%"
        transitionDuration={20}
        onClick={mapClickHandler}
      >
        <Markers zoom={viewport.zoom} />
      </MapGL>
    </div>
  );
};

export default Map;
