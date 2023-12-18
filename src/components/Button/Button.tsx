import React from "react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  const [count, setCount] = React.useState(1);
  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      {props.label + count}
    </button>
  );
};

export default Button;
