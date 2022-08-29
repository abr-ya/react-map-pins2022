export interface IPin {
  _id: string;
  username: string;
  title: string;
  desc: string;
  rating: number;
  long: number;
  lat: number;
  createdAt: string;
  updatedAt: string;
}

export interface IViewport {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface ICoord {
  lat: number;
  long: number;
}

export interface ISubmitPinHandler {
  title: string;
  desc: string;
  rating: number;
}

export interface ICreatePinPayload extends ISubmitPinHandler, ICoord {}
