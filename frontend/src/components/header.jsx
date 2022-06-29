function Header() {
  const object = [
    { value: "", display: "find by theme" },
    { value: "PQ", display: "Problème de papier toilette" },
  ];
  const needAnInput = true;
  const needAnSelect = true;
  return (
    <div className="flex flex-row space-evenly bgheader">
      <a href="https://grimoire-terry.netlify.app/">
        <img
          className="object-contain"
          src="https://i.ibb.co/3TPgmzs/apside-white-1.png"
          alt="logo"
          href="https://grimoire-terry.netlify.app/"
        />
      </a>
      <p className="underline-offset-8">El Famoso Forum !!!</p>
      {needAnInput ? <input className="h-8" placeholder="find by name" /> : ""}
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
