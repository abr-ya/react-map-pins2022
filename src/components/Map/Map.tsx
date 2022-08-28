import { useState } from "react";
import MapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Markers from "components/Markers/Markers";
import { ICoord, IViewport } from "interfaces";
import { getCoordFromE } from "utils";

const Map = () => {
  const [viewport, setViewport] = useState<IViewport>({
    latitude: 50,
    longitude: 17,
    zoom: 4,
  });
  const [newPin, setNewPin] = useState<ICoord | null>(null);

  const mapClickHandler = (e: any) => {
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
        <Markers zoom={viewport.zoom} setViewport={setViewport} />
        {newPin && <>11</>}
      </MapGL>
    </div>
  );
};

export default Map;
