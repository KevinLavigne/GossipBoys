import logo from "../assets/logo-title-white.png";

function Header({ isDashboard }) {
  const object = [
    { value: "", display: "find by theme" },
    { value: "PQ", display: "Problème de papier toilette" },
  ];
  return (
    <div className="header-wrapper">
      <div className="flex flex-wrap items-center justify-between ">
        <img src={logo} alt="logo" />

        {isDashboard ? (
          <input
            className="h-8 justify-center object-center place-items-center place-content-center "
            placeholder="find by name"
          />
        ) : (
          ""
        )}
        {isDashboard ? (
          <select className="h-8 mr-16">
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
