import { createContext, useState } from "react";

const Context = createContext();

function Provider({ children }) {
  const [state, setState] = useState([]);
  const [state2, setState2] = useState([]);
  const [favorite, setFavorite] = useState(false);

  const handleClickOnFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <Context.Provider
      value={{
        state,
        setState,
        state2,
        setState2,
        favorite,
        handleClickOnFavorite,
      }}
    >
      {children}
    </Context.Provider>
  );
}
const ExportContext = {
  Context,
  Provider,
};
export default ExportContext;
