import React from "react";

import "../../styles/Button/Button.css";

interface textButton {
  text: string
  color: string
  background: string
}

const Button = (props: textButton) => {
  return <button id="btn" style={{color: props.color, background: props.background }}>{props.text}</button>;
};

export default Button;
