import "./UserCard.css";
import Icon from "@material-ui/core/Icon";
import { useState } from "react";
import UserModal from "./UserModal";
//import useLocalStorage from "react-use-localstorage";

const UserCard = ({ id, imgSrc, firstName }) => {
  const [open, setOpen] = useState(false);
  const [isStar, setIsStar] = useState(false);
  //local Storage for adding the star for the User
  /* const [storageItem, setStorageItem] = useLocalStorage(
    "User-Star",
    JSON.stringify([])
  );
 */
   const setStarFunction = (e, id) => {
    e.stopPropagation();
    setIsStar((prev) => !prev);
  };

  /* code that tried to enable the Localstorage star system.

  const storagedArray = JSON.parse(storageItem);
  const isFavourited = storagedArray.includes(id);
  console.log(JSON.parse(storageItem), isStar);

  const handleToggleFavourite = (e, eid) => {
    e.stopPropagation();
    const isFavourite = storagedArray.includes(eid);
    if (!isFavourite) {
      storagedArray.push(eid);
      setStorageItem(JSON.stringify(storagedArray));
    } else {
      const indexFavouritedId = storagedArray.indexOf(eid);
      console.log(indexFavouritedId, "index", eid);
      storagedArray.splice(indexFavouritedId, 1);
      setStorageItem(JSON.stringify(storagedArray));
    }
  };
 */
  const handleOpen = () => {
    //function to show the Modal
    setOpen(true);
  };

  const handleClose = () => {
    //function to remove the Modal
    setOpen(false);
  };

  return (
    <div>
      {open && ( //will show this Jsx when click on Card
        <div>
          <UserModal handleClose={handleClose} open={open} id={id} />
        </div>
      )}
      <div className="card" onClick={() => handleOpen()}>
        <Icon
          className="star-icon"
          onClick={(e) => setStarFunction(e, id)}
        >
          {isStar ? "star_rounded" : "star_border_rounded_icon"}
        </Icon>
        <div className="card-image">
          <img src={`${imgSrc}`} alt={firstName} /> {/*avatar of the user*/}
        </div>
        <div>
          {/*name of the user*/}
          <h3 className="card-title">{firstName}</h3>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
