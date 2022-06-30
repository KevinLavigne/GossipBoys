import { useContext } from "react";
import ExportContext from "../contexts/Context";
import logo from "../assets/logo-title-white.png";
import logo from "../assets/newlogotitlewhite.png";

function Header({ isDashboard }) {
  const object = [
    { value: "", display: "Find by theme" },
    { value: "PQ", display: "Problème de papier toilette" },
  ];
  const { handleChangeCatégoryFilter, handleChangeNameFilter, nameFilter } =
    useContext(ExportContext.Context);
  return (
    <div className="header-wrapper">
      <div className="flex flex-wrap items-center justify-between ">
        <img src={logo} alt="logo" />
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
            onSelect={(e) => handleChangeCatégoryFilter(e.target.value)}
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
