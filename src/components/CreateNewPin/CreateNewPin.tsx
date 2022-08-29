import { ISubmitPinHandler } from "interfaces";
import { useEffect, useState, FormEvent } from "react";
import "./createNewPin.css";

interface ICreateNewPin {
  submitPinHandler: (data: ISubmitPinHandler) => void;
}

const CreateNewPin = ({ submitPinHandler }: ICreateNewPin) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    console.log("mount form");

    return () => {
      console.log("unmount form");
    };
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitPinHandler({ title, desc, rating });
  };

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input placeholder="Enter a title" autoFocus onChange={(e) => setTitle(e.target.value)} />
        <label>Description</label>
        <textarea placeholder="Say us something about this place." onChange={(e) => setDesc(e.target.value)} />
        <label>Rating</label>
        <select onChange={(e) => setRating(parseInt(e.target.value))}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button type="submit" className="submitButton">
          Add Pin
        </button>
      </form>
    </div>
  );
};

export default CreateNewPin;
