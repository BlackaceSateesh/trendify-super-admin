import React from "react";
import { Link } from "react-router-dom";

const ButtonMain = ({ name, btnColor, link }) => {
  return (
    <>
      {link ? (
        <Link to={link}>
          <button className={`ButtonMain ${btnColor ? btnColor : ""}`}>
            {name}
          </button>
        </Link>
      ) : (
          <button className={`ButtonMain ${btnColor ? btnColor : ""}`}>
            {name}
          </button>
      )}
    </>
  );
};

export default ButtonMain;
