import { Star } from "@mui/icons-material";
import "./card.css";

const Card = () => {
  return (
    <div className="card">
      <label>Place</label>
      <h4 className="place">Prague Zoo</h4>
      <label>Review</label>
      <p className="description">
        The zoo is rated as the seventh best zoo in the world by Forbes Travel Guide in 2007
      </p>
      <label>Rating</label>
      <div className="stars">
        <Star className="star" />
        <Star className="star" />
        <Star className="star" />
        <Star className="star" />
        <Star />
      </div>
      <label>Information</label>
      <span className="username">Created by User</span>
      <span className="date">1 hour ago</span>
    </div>
  );
};

export default Card;
