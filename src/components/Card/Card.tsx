import { Star } from "@mui/icons-material";
import { format } from "timeago.js";
import "./card.css";

interface ICard {
  title: string;
  desc: string;
  rating: number;
  username: string;
  createdAt: string;
}

const Card = ({ title, desc, rating, username, createdAt }: ICard) => {
  // console.log(rating, username);

  return (
    <div className="card">
      <label>Place</label>
      <h4 className="place">{title}</h4>
      <label>Review</label>
      <p className="description">{desc}</p>
      <label>Rating</label>
      <div className="stars">
        <Star className="star" />
        <Star className="star" />
        <Star className="star" />
        <Star className="star" />
        <Star />
      </div>
      <label>Information</label>
      <div>
        <span className="username">Created by {username} &nbsp;</span>
        <span className="date">{format(createdAt)}</span>
      </div>
    </div>
  );
};

export default Card;
