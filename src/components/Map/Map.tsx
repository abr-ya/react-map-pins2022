/* eslint-disable react/jsx-no-target-blank */
import { useState, MouseEvent } from "react";
import MapGL, { MapEvent, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Markers from "components/Markers/Markers";
import { ICoord, ISubmitPinHandler, IViewport } from "interfaces";
import { getCoordFromE } from "utils";
import Marker from "components/Marker/Marker";
import CardNew from "components/CardNewPin/CardNewPin";

const Map = () => {
  const [username] = useState("Jane");
  const [viewport, setViewport] = useState<IViewport>({
    latitude: 50,
    longitude: 17,
    zoom: 4,
  });
  const [active, setActive] = useState<string | null>(null);
  const [newPin, setNewPin] = useState<ICoord | null>(null);

  const mapClickHandler = (e: MapEvent) => {
    const element = e.target as HTMLElement;
    // если клик по карте - не реагировать на клики в модалках, например
    if (element.classList.contains("overlays")) {
      setActive("new");
      const newCoord = getCoordFromE(e);
      console.log(newCoord);
      setNewPin(newCoord);
    }
  };

  const submitPinHandler = ({ title, desc, rating }: ISubmitPinHandler) => {
    if (newPin) {
      setActive(null);
      setNewPin(null);
      const payload = {
        username,
        title,
        desc,
        rating,
        ...newPin,
      };
      console.log(payload);
    }
  };

  return (
    <div className="map-wrapper">
      <MapGL
        mapboxApiAccessToken={process.env.MAP_KEY}
        {...viewport}
        onViewportChange={({ latitude, longitude, zoom }: any) => setViewport({ latitude, longitude, zoom })}
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
              <CardNew lat={newPin.lat} long={newPin.long} submitPinHandler={submitPinHandler} />
            </Popup>
          </>
        )}
      </MapGL>
    </div>
  );
};

export default Map;
