import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

function CityList() {
  const { cities, isLoading } = useCities(); //🎢🎢[CUSTOM HOOK]🎢🎢 now we created this variable to connect with the Context API, the NOTES from bellow was available when the "cities" and "isLoading" where up in the "CityList (...here...)" 🎢🎢[CUSTOM HOOK]🎢🎢

  if (isLoading) return <Spinner />; //🌆🌆[CITIES LIST]🌆🌆check the <Spinner/> file to see how to create a spinner//// if the loading is taking to much will display the "Spinner" loading, otherwise will display the "return" from bellow 🔽 //🌌🌌[SPINNER SPINNER]🌌🌌.... for the Spinner also check the "package.json" file to see the code that delay's the loading of page to see the Spinner longer🌌🌌[SPINNER SPINNER]🌌🌌

  ////📃📃[EMPTY LIST]📃📃 HERE we create that situation if the list is empty and there is no citie already added, will display this message from bellow, this code will apply only if the list is empty... check also the "Message" file to see the code //📃📃[EMPTY LIST]📃📃
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
} //🌆🌆[CITIES LIST]🌆🌆 here we are creating the cities list 🌆🌆[CITIES LIST]🌆🌆// also check please the "App.jsx" file

export default CityList;
