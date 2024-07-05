import React from "react";
import { Link } from "react-router-dom";

const ButtonMain = ({ name, btnColor, link ,onClick }) => {
  return (
    <>
      {link ? (
        <Link to={link}>
          <button className={`ButtonMain ${btnColor ? btnColor : ""}`}>
            {name}
          </button>
        </Link>
      ) : (
          <button onClick={onClick} className={`ButtonMain ${btnColor ? btnColor : ""}`}>
            {name}
          </button>
      )}
    </>
  );
};

export default ButtonMain;
