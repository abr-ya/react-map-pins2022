import { ICoord } from "interfaces";

export const getCoordFromE = (e: any): ICoord => {
  const [long, lat] = e.lngLat;

  return { lat, long };
};
