/* eslint-disable */
import { useEffect, useContext } from "react";
import axios from "axios";
import ExportContext from "./contexts/Context";

const { setState } = useContext(ExportContext.useContext);

/**
 * useEffect:
 * @param URL to remplace with url to fetch
 */
useEffect((URL) => {
  axios.get(`${URL}`).then((res) => setState(res.data));
}, []);

/**
 *filtre & map:
 * @elements = tableaux a filtre et copier
 * @element1 = each element of elements
 * @element2 = each element after the filter
 */
const elements = [
  { name: "Damien", id: "1" },
  { name: "Sébastien", id: "2" },
];
const tofiltre = "";
{
  elements &&
    elements
      .filter((element1) => element1.name.includes(tofiltre))
      .map((element2) => <PokemonCard key={element2.id} pokemon={element2} />);
}
/**
 *map:
 * @elements = tableaux a filtre et copier
 * @element1 = each element of elements
 */
{
  elements &&
    elements.map((element1) => (
      <PokemonCard key={element1.id} pokemon={element1} />
    ));
}
