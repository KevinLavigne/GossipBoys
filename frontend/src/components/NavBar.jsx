import { HashLink as NavLink } from "react-router-hash-link";

import home from "../assets/house.png";
import plus from "../assets/plus.png";
import star from "../assets/etoile.png";
import user from "../assets/utilisateur.png";
import cloche from "../assets/cloche.png";
import offButton from "../assets/off-button.png";

function NavBar() {
  return (
    <div className="absolute navbar py-6 px-6 h-screen">
      <ul className="flex flex-col justify-between h-full content-center place-content-center">
        <NavLink to="/">
          <img
            src={plus}
            alt="+"
            className="w-8 self-center place-self-center"
          />
        </NavLink>
        <NavLink to="/">
          <img src={home} alt="maison" className="w-4" />
        </NavLink>
        <NavLink to="/">
          <img src={cloche} alt="notification" className="w-4" />
        </NavLink>
        <NavLink to="/Page1">
          <img src={star} alt="etoile" className="w-4" />
        </NavLink>
        <NavLink to="/Page2">
          <img src={user} alt="utilisateur" className="w-4" />
        </NavLink>
        <NavLink to="/Page3">
          <img src={offButton} alt="utilisateur" className="w-4" />
        </NavLink>
      </ul>
    </div>
  );
}

export default NavBar;
