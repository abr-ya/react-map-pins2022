import { useEffect, useState } from "react";
import { Marker, Popup } from "react-map-gl";
import { Place } from "@mui/icons-material";
import Card from "components/Card/Card";
import { getAllPins } from "services/api";
import { IPin } from "interfaces";

interface IMarker {
  zoom: number;
}

const Markers = ({ zoom }: IMarker) => {
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

  if (pins.length === 0) return <span>markers loading...</span>;

  return (
    <>
      {pins.length &&
        pins.map((pin: IPin) => (
          <div key={pin._id}>
            <Marker latitude={pin.lat} longitude={pin.long} offsetLeft={-3.5 * zoom} offsetTop={-7 * zoom}>
              <Place
                style={{ fontSize: zoom * 7, color: "slateblue", cursor: "pointer" }}
                onClick={markerClickHandler}
              />
            </Marker>
            <Popup latitude={pin.lat} longitude={pin.long} closeButton={true} closeOnClick={false}>
              <Card {...pin} />
            </Popup>
          </div>
        ))}
    </>
  );
};

export default Markers;
