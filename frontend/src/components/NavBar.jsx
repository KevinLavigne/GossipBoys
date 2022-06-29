import { HashLink as NavLink } from "react-router-hash-link";

import home from "../assets/house.png";
import plus from "../assets/plus.png";
import star from "../assets/etoile.png";
import user from "../assets/utilisateur.png";
import cloche from "../assets/cloche.png";
import offButton from "../assets/off-button.png";

function NavBar() {
  return (
    <div className="absolute navbar py-6 px-6 m-3 h-5/6 shadow-sm">
      <ul className="flex flex-col justify-around h-full items-center">
        <NavLink to="/">
          <img
            src={plus}
            alt="+"
            className="w-8 self-center place-self-center transition duration-150 ease-out hover:scale-125"
          />
        </NavLink>
        <NavLink to="/">
          <img
            src={home}
            alt="maison"
            className="w-4 transition duration-150 ease-out hover:scale-125"
          />
        </NavLink>
        <NavLink to="/">
          <img
            src={cloche}
            alt="notification"
            className="w-5 transition duration-150 ease-out hover:scale-125"
          />
        </NavLink>
        <NavLink to="/Page1">
          <img
            src={star}
            alt="etoile"
            className="w-5 transition duration-150 ease-out hover:scale-125"
          />
        </NavLink>
        <NavLink to="/Page2">
          <img
            src={user}
            alt="utilisateur"
            className="w-5 transition duration-150 ease-out hover:scale-125"
          />
        </NavLink>
        <NavLink to="/Page3">
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
