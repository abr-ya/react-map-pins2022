import Map from "react-map-gl";

const MapComponent = () => {
  const mapClickHandler = (e) => {
    console.log(e.lngLat);
  };

  return (
    <Map
      mapboxAccessToken={process.env.MAP_KEY}
      initialViewState={{
        longitude: 17,
        latitude: 46,
        zoom: 4,
      }}
      style={{ width: "100%", height: "calc(100vh - 120px)" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      onClick={mapClickHandler}
    />
  );
};

export default MapComponent;
