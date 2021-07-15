import "./UserCard.css";
import Icon from "@material-ui/core/Icon";
import { useState } from "react";
import UserModal from "./UserModal";

const UserCard = ({ id, imgSrc, firstName }) => {
  const [star, setStar] = useState([]);
  const [isStar, setIsStar] = useState(false);
  const [open, setOpen] = useState(false);

  const setStarFunction = (e, id) => {
    e.stopPropagation();
    setIsStar((prev) => !prev);
    console.log("star", isStar);
    setStar([...star, id]);
    console.log(star);
    //localstorage.setItem('starId',star);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log("open", open);
  return (
    <div>
      {open&&(<div>
        <UserModal handleClose={handleClose} open={open} id={id} />
      </div>)}
      <div className="card" onClick={() => handleOpen()}>
        <Icon className="star-icon" onClick={(e) => setStarFunction(e, id)}>
          {isStar ? "star_rounded" : "star_border_rounded_icon"}
        </Icon>
        <div className="card-image">
          <img src={`${imgSrc}`} alt={firstName} /> {/*avatar of the user*/}
        </div>
        <div>
          <h3 className="card-title">{firstName}</h3>
          {/*avatar of the user*/}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
