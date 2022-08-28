/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react";
import MapGL, { Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Markers from "components/Markers/Markers";
import { ICoord, IViewport } from "interfaces";
import { getCoordFromE } from "utils";
import Marker from "components/Marker/Marker";
import CardNew from "components/CardNew/CardNew";

const Map = () => {
  const [viewport, setViewport] = useState<IViewport>({
    latitude: 50,
    longitude: 17,
    zoom: 4,
  });
  const [active, setActive] = useState<string | null>(null);
  const [newPin, setNewPin] = useState<ICoord | null>(null);

  const mapClickHandler = (e: any) => {
    setActive("new");
    const newCoord = getCoordFromE(e);
    console.log(newCoord);
    setNewPin(newCoord);
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
        <Markers zoom={viewport.zoom} setViewport={setViewport} active={active} setActive={setActive} />
        {active === "new" && newPin && (
          <>
            <Marker
              _id="new"
              latitude={newPin.lat}
              longitude={newPin.long}
              zoom={viewport.zoom}
              clickHandler={() => false}
              doubleClickHandler={() => false}
            />
            <Popup
              latitude={newPin.lat}
              longitude={newPin.long}
              closeButton={true}
              closeOnClick={false}
              onClose={() => setActive(null)}
              anchor="top"
            >
              <CardNew lat={newPin.lat} long={newPin.long} />
            </Popup>
          </>
        )}
      </MapGL>
    </div>
  );
};

export default Map;
