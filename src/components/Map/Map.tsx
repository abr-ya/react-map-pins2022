import { useState } from "react";
import MapGL, { Marker, Popup } from "react-map-gl";
import { Place } from "@mui/icons-material";
import Card from "components/Card/Card";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 50.04,
    longitude: 17.07,
    zoom: 4,
  });

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
      >
        <Marker latitude={50.2} longitude={14.4} offsetLeft={-3.5 * viewport.zoom} offsetTop={-7 * viewport.zoom}>
          <Place style={{ fontSize: viewport.zoom * 7, color: "slateblue" }} />
        </Marker>
        <Popup latitude={50.2} longitude={14.4} closeButton={true} closeOnClick={false} anchor="left">
          <Card />
        </Popup>
      </MapGL>
    </div>
  );
};

export default Map;
