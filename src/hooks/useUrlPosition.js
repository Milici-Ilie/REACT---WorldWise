import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  //🦉🦉[TAKING INFO's BY CLICKING THE MAP]🦉🦉 here we are creating a hook on another hook, the "useSearchParams" is a hook that cames from "ReactRouter" from above 👆 🦉🦉[TAKING INFO's BY CLICKING THE MAP]🦉🦉 we also need to write "export" in the beggining to be able to acces the function in another files// now go and check the "Map.jsx" file 🦉🦉[TAKING INFO's BY CLICKING THE MAP]🦉🦉
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return [lat, lng];
}
