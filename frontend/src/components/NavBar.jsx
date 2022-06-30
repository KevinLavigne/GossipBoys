import { useContext } from "react";
import { HashLink as NavLink } from "react-router-hash-link";

import home from "../assets/house.png";
import starBlack from "../assets/star_black.svg";
import starYellow from "../assets/star_yellow.svg";
import user from "../assets/utilisateur.png";
import cloche from "../assets/cloche.png";
import offButton from "../assets/off-button.png";
import ModalTopic from "./ModalTopic";

import ExportContext from "../contexts/Context";

function NavBar() {
  const { favorite, handleClickOnFavorite } = useContext(ExportContext.Context);

  return (
    <div className="absolute navbar py-6 px-6 m-3 h-5/6 shadow-sm">
      <ul className="flex flex-col justify-around h-full items-center">
        <ModalTopic />
        <NavLink to="/dashboard">
          <img
            src={home}
            alt="maison"
            className="w-4 transition duration-150 ease-out hover:scale-125"
          />
        </NavLink>
        <NavLink to="/Page3">
          <img
            src={cloche}
            alt="notification"
            className="w-5 transition duration-150 ease-out hover:scale-125"
          />
        </NavLink>
        <button type="button" onClick={() => handleClickOnFavorite()}>
          {favorite && favorite ? (
            <img
              src={starBlack}
              alt="etoile"
              className="w-5 transition duration-150 ease-out hover:scale-125"
            />
          ) : (
            <img
              src={starYellow}
              alt="etoile"
              className="w-5 transition duration-150 ease-out hover:scale-125"
            />
          )}
        </button>
        <NavLink to="/user-account">
          <img
            src={user}
            alt="utilisateur"
            className="w-5 transition duration-150 ease-out hover:scale-125"
          />
        </NavLink>
        <NavLink to="/">
          <img
            src={offButton}
            alt="utilisateur"
            className="w-5 transition duration-150 ease-out hover:scale-125"
          />
        </NavLink>
      </ul>
    </div>
  );
}

export default NavBar;
