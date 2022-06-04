import React from "react";
import  ReactDOM from "react-dom";
import classes from "./Model.module.css"

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onclosed}/>;
};
const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalele=document.getElementById("overlay");


export default function Model(props) {
  return (
    <div>
      {ReactDOM.createPortal(<Backdrop onclosed={props.onclose} />,portalele)}
      {ReactDOM.createPortal(<Overlay>{props.children} </Overlay>,portalele)}
    </div>
  );
}
