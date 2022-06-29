function Header() {
  const object = [
    { value: "", display: "find by theme" },
    { value: "PQ", display: "Problème de papier toilette" },
  ];
  const needAnInput = true;
  const needAnSelect = true;
  return (
    <div className="flex flex-row justify-evenly bgheader h-20 justify-center object-center place-items-center place-content-center">
      <a
        className="tucasselescouileecssdemerde justify-items-start justify-self-start place-self-start place-items-start place-content-start"
        href="https://grimoire-terry.netlify.app/"
      >
        <img
          className="object-contain "
          src="https://i.ibb.co/3TPgmzs/apside-white-1.png"
          alt="logo"
          href="https://grimoire-terry.netlify.app/"
        />
      </a>
      {needAnInput ? (
        <input
          className="h-8 justify-center object-center place-items-center place-content-center"
          placeholder="find by name"
        />
      ) : (
        ""
      )}
      {needAnSelect ? (
        <select className="h-8">
          {object.map((item) => {
            return <option value={item.value}> {item.display} </option>;
          })}
        </select>
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
