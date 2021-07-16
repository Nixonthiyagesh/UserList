import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import axios from "../axios";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  //Styles for this Modal using materialUi makeStyles function
  paper: {
    position: "absolute",
    width: "70%",
    height: "60%",
    backgroundColor: "#999",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    outline: "none",
    borderRadius: 5,
  },
  image: {
    borderRadius: 5,
  },
  close: {
    position: "absolute",
    top: 10,
    right: 10,
    color: "#f98d4d",
  },
}));

export default function UserModal({ id, handleClose, open }) {
  const classes = useStyles();
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //useEfect for go to the specfic users id while clicking on card
  useEffect(() => {
    setIsLoading(true);
    const fetchId = async () => {
      const userData = await axios.get(`/${id}`);
      setUser(userData.data.data);
    };
    fetchId();
    setIsLoading(false);
  }, [id]);

  const body = !isLoading ? (
    <div className={classes.paper}>
      <Icon onClick={handleClose} className={classes.close}>
        close_icon
      </Icon>
      <h2 id="simple-modal-title">{user.first_name + " " + user.last_name}</h2>
      <img className={classes.image} src={user.avatar} alt={user.first_name} />
      <p id="simple-modal-description">{user?.email}</p>
    </div>
  ) : (
    <div>Loading...</div>
  );

  return (
    <div>
      {/* model component feom material ui */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
