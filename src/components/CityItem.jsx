/* eslint-disable */ //this will disable the "esLint" to get rid of errors 🌞🌞[STORING UI STATE]🌞🌞
import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import { useCities } from "../contexts/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    // weekday: "long",
  }).format(new Date(date)); //🌆🌆[CITIES LIST]🌆🌆 dates used bellow 🔽

function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city; //🌞🌞[STORING UI STATE]🌞🌞 IMPORTANT, we must include the "id"  here and than pass it down 🔻 to the <Link/> at "to={`${id}`}", very important, this is how the React will now how to find the correct path where the user want to go, the id will atach to the id URL that we already have creating the new URL/path////// also NOTE that we must place the content inside of "<Link ....> ...etc etc ... </Link>" 🌞🌞[STORING UI STATE]🌞🌞=========== //🔆🔆[2ND WAY OF STORING IN THE URL]🔆🔆 we must add the "position" from above 🔼 inside of the destructured obj{...., position}=city;// 🔆🔆[2ND WAY OF STORING IN THE URL]🔆🔆// IMPORTANT// down, inside of the <Link to={`${id}?lat=${position.lat}&lng=${position.lng}`} we have all this code, the "${id}" is explained up in the full sun, but now we added the "lat" and the "lng" and we can keep going to add more info's in the URL//// also go please and check the "Map.jsx" file 🔆🔆[2ND WAY OF STORING IN THE URL]🔆🔆

  const { currentCity, deleteCity } = useCities(); //🚉🚉[CITY VIEW from API SERVER]🚉🚉 to have acces at the "currentCity" PROP we must add it first, than check bellow the explanation about how to use it///// to see the CSS file where is the style for this code go and check the "CityItem.module.css" file 🚉🚉[CITY VIEW from API SERVER]🚉🚉// //🧈🧈[DELETE CITY]🧈🧈 we also added the function "deleteCity"

  function handleClick(e) {
    e.preventDefault(); //🧈🧈[DELETE CITY]🧈🧈 here we created this function to call down 👇 to prevent from accesing the entire content of the city and only acces the "X"/delete button when is pressed 🧈🧈[DELETE CITY]🧈🧈
    // console.log("test");
    deleteCity(id); // by calling the function with the "(id)" the function will now witch city to delete depending on the unique "id"
  }

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }`} //🚉🚉[CITY VIEW from API SERVER]🚉🚉 aditionally to add multiple "styles.classes" in the "className" we need to include the code inside the {`...code...`}///.../// so we want to add the class of the green border around the City content when the current "id" is equal to the "currentCity" {id} from the "City.jsx" file, found it inside of the code "const { getCity, 🈁currentCity🈁, isLoading } = useCities();" 🚉🚉[CITY VIEW from API SERVER]🚉🚉///====/// was necessarly to includ the class "cityItem--active" inside the brackets because of the dash'es "--" to make the class name to be accepted, ex: ["cityItem--active"]🚉🚉[CITY VIEW from API SERVER]🚉🚉
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button
          className={styles.deleteBtn}
          onClick={handleClick} //🧈🧈[DELETE CITY]🧈🧈 here we added the function for preventing the press on the "X" button to press the entire button, this will make the action to happen only on the "X" button to delete the city and not on the entire content, the city 🧈🧈[DELETE CITY]🧈🧈
        >
          &times;
        </button>
      </Link>
    </li> //🌆🌆[CITIES LIST]🌆🌆 here we are using our variable "formatDate" to display the date 🌆🌆[CITIES LIST]🌆🌆
  );
} //🌆🌆[CITIES LIST]🌆🌆connected with the "CityList" file 🌆🌆[CITIES LIST]🌆🌆

export default CityItem;
