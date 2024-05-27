import React from "react";

const Button = ({ label, OnClick }) => {
  return <button onClick={OnClick}>{label}</button>;
};

export default Button;
