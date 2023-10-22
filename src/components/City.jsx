/* eslint-disable */
import { useParams, useSearchParams } from "react-router-dom"; //🌞🌞[STORING UI STATE]🌞🌞 VERY IMPORTANT 🔽
import styles from "./City.module.css";
import { useCities } from "../contexts/CitiesContext";
import { useEffect } from "react";
import Spinner from "./Spinner";
import BackButton from "./BackButton";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { id } = useParams(); //🌞🌞[STORING UI STATE]🌞🌞 this functionallity will return the id's after the user is clicking on some options, some cities to make connection in the back side with the API 🌞🌞[STORING UI STATE]🌞🌞
  const { getCity, currentCity, isLoading } = useCities(); //🚉🚉[CITY VIEW from API SERVER]🚉🚉 here we are calling the PROPS from the "CitiesContext.jsx" file 🚉🚉[CITY VIEW from API SERVER]🚉🚉///====//// we also added the "isLoading" state/prop because when we change/choose from a city to another until the new city will load there will be displayed the previous city that we watched, so we want to replace that previous city with the loading spin... go down 👇 and check the "return" that contains this code "if (isLoading) return <Spinner />;" 🚉🚉[CITY VIEW from API SERVER]🚉🚉

  useEffect(
    function () {
      getCity(id);
    },
    [id]
  ); //🚉🚉[CITY VIEW from API SERVER]🚉🚉the "useEffect" from above is created to take the "id" from the API server🚉🚉[CITY VIEW from API SERVER]🚉🚉

  //🔆🔆[2ND WAY OF STORING IN THE URL]🔆🔆this is enabled because we created a new way of geting the data from the API, but in the lesson for STORING IN THE URL this is still available//🔆🔆[2ND WAY OF STORING IN THE URL]🔆🔆
  //💣 const [searchParams, setSearchParams] = useSearchParams();
  //💣 const lat = searchParams.get("lat");
  //💣 const lng = searchParams.get("lng"); //🔆🔆[2ND WAY OF STORING IN THE URL]🔆🔆 here we are doing the same thing by taking info's regarding on the API/URL info's

  const { cityName, emoji, date, notes } = currentCity;

  if (isLoading) return <Spinner />; // here🎇 is the Loading Spinner

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <BackButton />
      </div>
    </div> //🔘🔘[REUSABLE BUTTON]🔘🔘 go and check the file "BackButton.jsx" " 🔘🔘[REUSABLE BUTTON]🔘🔘
  );
}

export default City;
