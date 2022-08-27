import { useEffect, useState } from "react";
import MapGL, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Place } from "@mui/icons-material";
import Card from "components/Card/Card";
import { getAllPins } from "services/api";
import { IPin } from "interfaces";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 50,
    longitude: 17,
    zoom: 3,
  });
  const [pins, setPins] = useState<IPin[]>([]);

  const getPins = async () => {
    const newPins: IPin[] = await getAllPins();
    console.log(newPins);
    setPins(newPins);
  };

  useEffect(() => {
    getPins();
  }, []);

  const markerClickHandler = () => {
    console.log("!");
  };

  // if (pins.length === 0) return <span>loading...</span>;

  const Markers = () => {
    // console.log("render markers", pins.length);

    return (
      <>
        {pins.length &&
          pins.map((pin: IPin) => (
            <>
              <Marker
                latitude={pin.lat}
                longitude={pin.long}
                key={pin._id}
                offsetLeft={-3.5 * viewport.zoom}
                offsetTop={-7 * viewport.zoom}
              >
                <Place
                  style={{ fontSize: viewport.zoom * 7, color: "slateblue", cursor: "pointer" }}
                  onClick={markerClickHandler}
                />
              </Marker>
              {/* <Popup latitude={pin.lat} longitude={pin.long} closeButton={true} closeOnClick={false}>
                <Card {...pin} />
              </Popup> */}
            </>
          ))}
      </>
    );
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
      >
        <Markers />
      </MapGL>
    </div>
  );
};

export default Map;
