import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";
// 🌏🌏[COUNTRY LIST]🌏🌏

function CountyList() {
  const { cities, isLoading } = useCities(); //🎢🎢[CUSTOM HOOK]🎢🎢 now we created this variable to connect with the Context API, the NOTES from bellow was available when the "cities" and "isLoading" where up in the "function CountryList (...here...) {...}" 🎢🎢[CUSTOM HOOK]🎢🎢

  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []); // // 🌏🌏[COUNTRY LIST]🌏🌏 this variable all it does is to keep looping over the array and creating a new array every time when the map is accsessed // 🌏🌏[COUNTRY LIST]🌏🌏 // this is the function fo adding countys, for more informations please ask CHAT GPT // 🌏🌏[COUNTRY LIST]🌏🌏

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}
// 🌏🌏[COUNTRY LIST]🌏🌏
export default CountyList;
