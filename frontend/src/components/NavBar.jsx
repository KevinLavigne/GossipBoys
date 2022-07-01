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
    <div className="navbar  flex h-full jusytify-center rounded shadow-lg  fixed z-50">
      <ul className="flex flex-col justify-around h-full  items-center ">
        <div>
          <ModalTopic />
        </div>

        <NavLink to="/dashboard">
          <img
            src={home}
            alt="maison"
            className="w-4 transition duration-150 ease-out hover:scale-125  jusytify-center "
          />
        </NavLink>
        <NavLink to="/Page3">
          <span className="flex h-3 w-3">
            <span className="animate-ping inline-flex h-full w-3 rounded-full bg-cyan-500 opacity-75" />
          </span>
          <img
            src={cloche}
            alt="notification"
            className="w-5 transition duration-150 ease-out hover:scale-125 "
          />
        </NavLink>
        <button type="button" onClick={() => handleClickOnFavorite()}>
          {favorite && favorite ? (
            <img
              src={starYellow}
              alt="etoile"
              className="w-5 transition duration-150 ease-out hover:scale-125 "
            />
          ) : (
            <img
              src={starBlack}
              alt="etoile"
              className="w-5 transition duration-150 ease-out hover:scale-125 "
            />
          )}
        </button>

        <img
          src={user}
          alt="utilisateur"
          className="w-5 transition duration-150 ease-out hover:scale-125 "
        />

        <NavLink to="/login">
          <img
            src={offButton}
            alt="utilisateur"
            className="w-5 transition duration-150 ease-out hover:scale-125 "
          />
        </NavLink>
      </ul>
    </div>
  );
}

export default NavBar;
