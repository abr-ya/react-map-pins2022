import { Marker as GLMarker } from "react-map-gl";
import { Place } from "@mui/icons-material";
import { ICoord } from "interfaces";

interface IMarker {
  _id: string;
  latitude: number;
  longitude: number;
  zoom: number;
  clickHandler: (id: string) => void;
  doubleClickHandler: (id: string, coord: ICoord) => void;
  isMyPin?: boolean;
}

const Marker = ({ _id, latitude, longitude, zoom, clickHandler, doubleClickHandler, isMyPin }: IMarker) => {
  return (
    <GLMarker
      latitude={latitude}
      longitude={longitude}
      offsetLeft={-3.5 * zoom}
      offsetTop={-7 * zoom}
      onClick={() => clickHandler(_id)}
      onDoubleClick={() => doubleClickHandler(_id, { lat: latitude, long: longitude })}
    >
      <Place
        style={{
          fontSize: zoom * 7,
          color: isMyPin ? "tomato" : "slateblue",
          cursor: "pointer",
        }}
      />
    </GLMarker>
  );
};

export default Marker;
