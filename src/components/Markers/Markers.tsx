import { useEffect, useState } from "react";
import { Marker, Popup } from "react-map-gl";
import { Place } from "@mui/icons-material";
import Card from "components/Card/Card";
import { getAllPins } from "services/api";
import { ICoord, IPin, IViewport } from "interfaces";

interface IMarker {
  zoom: number;
  setViewport: (view: IViewport) => void;
}

const Markers = ({ zoom, setViewport }: IMarker) => {
  const [pins, setPins] = useState<IPin[]>([]);
  const [active, setActive] = useState<string | null>(null);

  const getPins = async () => {
    const newPins: IPin[] = await getAllPins();
    console.log(newPins);
    setPins(newPins);
  };

  useEffect(() => {
    getPins();
  }, []);

  const markerClickHandler = (id: string) => {
    console.log(id);
    setActive(id);
  };

  const markerDoubleClickHandler = (id: string, coord: ICoord) => {
    console.log("double", id, coord);
    setViewport({ latitude: coord.lat, longitude: coord.long, zoom: 14 });
  };

  if (pins.length === 0) return <span>markers loading...</span>;

  return (
    <>
      {pins.length &&
        pins.map((pin: IPin) => (
          <div key={pin._id}>
            <Marker
              latitude={pin.lat}
              longitude={pin.long}
              offsetLeft={-3.5 * zoom}
              offsetTop={-7 * zoom}
              onClick={() => markerClickHandler(pin._id)}
              onDoubleClick={() => markerDoubleClickHandler(pin._id, { lat: pin.lat, long: pin.long })}
            >
              <Place
                style={{
                  fontSize: zoom * 7,
                  color: pin.username === "Jane" ? "tomato" : "slateblue",
                  cursor: "pointer",
                }}
              />
            </Marker>
            {pin._id === active && (
              <Popup
                latitude={pin.lat}
                longitude={pin.long}
                closeButton={true}
                closeOnClick={false}
                onClose={() => setActive(null)}
              >
                <Card {...pin} />
              </Popup>
            )}
          </div>
        ))}
    </>
  );
};

export default Markers;
