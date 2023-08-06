import React from "react";
import classes from "./Notify.module.css";
import { Homesliceactions } from "../../redux/slices/Homeslice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Notify() {
  const title = useSelector((state) => state.Homeslice.title);
  const dispatch = useDispatch();
  return (
    <div className={classes.modal}>
      <div className={classes.notification}>
        <h1 className={classes.errorIcon}>Error</h1>
        <p className={classes.errorMessage}>
          {title}
        </p>
        <button
          className={classes.returnButton}
          onClick={() => {
            dispatch(Homesliceactions.toggleError(false));
          }}
        >
          Return
        </button>
      </div>
    </div>
  );
}

export default Notify;
