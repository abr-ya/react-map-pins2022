import CreateNewPin from "components/CreateNewPin/CreateNewPin";
import { ISubmitPinHandler } from "interfaces";
import { useState } from "react";
import "./cardnew.css";

interface ICardNewPin {
  lat: number;
  long: number;
  submitPinHandler: (data: ISubmitPinHandler) => void;
}

const CardNewPin = ({ lat, long, submitPinHandler }: ICardNewPin) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const addClickHandler = () => {
    setIsFormOpen(true);
  };

  if (isFormOpen) return <CreateNewPin submitPinHandler={submitPinHandler} />;

  return (
    <div className="cardnew">
      <div>Кликнули куда-то...</div>
      <div>lat: {lat}</div>
      <div>long: {long}</div>
      <div>
        <a href={`https://www.google.com/maps/@${lat},${long},6z/`} target="_blank" rel="noreferrer">
          открыть в Google Maps (новая вкладка)
        </a>
      </div>
      <button className="button-add" type="button" onClick={addClickHandler}>
        Добавить метку
      </button>
    </div>
  );
};

export default CardNewPin;
