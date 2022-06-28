import { HashLink as NavLink } from "react-router-hash-link";

function NavBar() {
  return (
    <ul>
      <NavLink to="/">
        <li>Accueil</li>
      </NavLink>
      <NavLink to="/Page1">
        <li>Page1</li>
      </NavLink>
      <NavLink to="/Page2">
        <li>Page2</li>
      </NavLink>
      <NavLink to="/Page3">
        <li>Page3</li>
      </NavLink>
    </ul>
  );
}

export default NavBar;
