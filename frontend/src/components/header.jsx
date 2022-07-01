import { useContext } from "react";
import { Link } from "react-router-dom";
import ExportContext from "../contexts/Context";
import logo from "../assets/newlogotitlewhite.png";

function Header({ isDashboard }) {
  const object = [
    { value: "", display: "Find by theme" },
    { value: "Human Ressources", display: "Human Ressources" },
    { value: "Product Owner", display: "Product Owner" },
    { value: "Accessibility", display: "Accessibility" },
    { value: "report", display: "Report" },
    { value: "well being", display: "Well Being" },
    { value: "Sales", display: "Sales" },
    { value: "life at work", display: "Life at Work" },
    { value: "other", display: "Other" },
  ];
  const { handleChangeCatégoryFilter, handleChangeNameFilter, nameFilter } =
    useContext(ExportContext.Context);
  return (
    <div className="header-wrapper">
      <div className="flex flex-wrap items-center justify-between ">
        <Link to="/dashboard">
          <img src={logo} alt="logo" />
        </Link>
        {isDashboard ? (
          <input
            className="mr-16 mb-6 bg-gray-50 shadow border border-gray-300 text-gray-900 rounded block w-30 p-2"
            placeholder="Find by name"
            value={nameFilter}
            onChange={(e) => handleChangeNameFilter(e.target.value)}
          />
        ) : (
          ""
        )}
        {isDashboard ? (
          <select
            onChange={(e) => handleChangeCatégoryFilter(e.target.value)}
            className="mr-16 mb-6 bg-gray-50 shadow border border-gray-300 text-gray-900 rounded block w-30 p-2.5"
          >
            {object.map((item) => {
              return <option value={item.value}> {item.display} </option>;
            })}
          </select>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Header;
