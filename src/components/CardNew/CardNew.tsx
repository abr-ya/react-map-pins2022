import "./cardnew.css";

interface ICardNew {
  lat: number;
  long: number;
}

const CardNew = ({ lat, long }: ICardNew) => {
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
    </div>
  );
};

export default CardNew;
