/* eslint-disable */
// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"
//🧭🧭[PROGRAMMATIC NAVIGATION]🧭🧭 also check the "Map.jsx" file 🧭🧭[PROGRAMMATIC NAVIGATION]🧭🧭
import { useEffect, useState } from "react";
import Button from "./Button"; //🧭🧭[PROGRAMMATIC NAVIGATION]🧭🧭 the reusable button
import styles from "./Form.module.css";
import BackButton from "./BackButton";
import Message from "./Message";
import Spinner from "./Spinner";
import { useCities } from "../contexts/CitiesContext"; //🚇🚇[ADDING A NEW CITY]🚇🚇
import { useUrlPosition } from "../hooks/useUrlPosition";
import DatePicker from "react-datepicker"; //📅📅[DATE PICKER]📅📅 go down 👇 and check also the rest of the code, also check in the "return" section for the <DatePicker />📅📅[DATE PICKER]📅📅
import "react-datepicker/dist/react-datepicker.css"; //📅📅[DATE PICKER]📅📅 this code is copyed from the "react datepicker.com" and now we will get the default format of the table from the React server 📅📅[DATE PICKER]📅📅
import { useNavigate } from "react-router-dom";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client"; //🦉🦉[TAKING INFO's BY CLICKING THE MAP]🦉🦉 here we store the "URL", check bellow 👇 to see rest of the code where we add after the "-client" from the URL the "lat" and "lng"🦉🦉[TAKING INFO's BY CLICKING THE MAP]🦉🦉

function Form() {
  // const navigate = useNavigate(); // 🧭🧭[PROGRAMMATIC NAVIGATION]🧭🧭 we call the "useNavigate" HOOK, function from React Router to implement that functionallity down in our buttons <Button/>, inside of "onClick" function 🧭🧭[PROGRAMMATIC NAVIGATION]🧭🧭// => I turn off this variable because now we created a reusable button for this functionallity, go and check the file "BackButton.jsx" to see how this button is created 🔘🔘[REUSABLE BUTTON]🔘🔘

  const [lat, lng] = useUrlPosition(); //🦉🦉[TAKING INFO's BY CLICKING THE MAP]🦉🦉
  const { createCity, isLoading } = useCities();
  const navigate = useNavigate(); //🚇🚇[ADDING A NEW CITY]🚇🚇 this HOOK is used to bring the "Form" back to the "cities" list after the user selected a city and added to the list// go down and check in the "async function handleSubmit(){...}🚇🚇[ADDING A NEW CITY]🚇🚇

  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false); //🦉🦉[TAKING INFO's BY CLICKING THE MAP]🦉🦉
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState(""); //🦉🦉[TAKING INFO's BY CLICKING THE MAP]🦉🦉 here we want to convert the Country name in to an emoji, a flag that coincide with the Country 🦉🦉[TAKING INFO's BY CLICKING THE MAP]🦉🦉
  const [geocodingError, setGeocodingError] = useState(""); //🦉🦉[TAKING INFO's BY CLICKING THE MAP]🦉🦉🌊🌊 used to display and error if the user is clicking on an area where is water, check bellow to see the connection code 🦉🦉[TAKING INFO's BY CLICKING THE MAP]🦉🦉

  useEffect(
    function () {
      if (!lat && !lng) return; //this will let the "form" empty if there is no "lat" and no "lng" when the user is first "log in". the form should be empty with no coordination

      async function fetchCityData() {
        try {
          setIsLoadingGeocoding(true);
          setGeocodingError(""); //🦉🦉[TAKING INFO's BY CLICKING THE MAP]🦉🦉🌊🌊 here we are setting the error to be empty, and check also bellow 👇 in the "catch" err
          const res = await fetch(
            `${BASE_URL}?latitude=${lat}&longitude=${lng}`
          ); //🦉🦉[TAKING INFO's BY CLICKING THE MAP]🦉🦉here we are creating the rest of the URL from the variable from above, meaning we ad the "lat" and "lng" 🦉🦉[TAKING INFO's BY CLICKING THE MAP]🦉🦉
          const data = await res.json();
          console.log(data);

          if (!data.countryCode)
            throw new Error(
              "That doesn't seem to be a city. Click somewhere else 😞"
            ); //🦉🦉[TAKING INFO's BY CLICKING THE MAP]🦉🦉🌊🌊 this will display an error message if the users clicked on an area where is water🦉🦉[TAKING INFO's BY CLICKING THE MAP]🦉🦉

          setCityName(data.city || data.locality || ""); // those "data.city" and "locality" are from the consolo.log(data); info's from the consolo when we click the MAP and get informations, we use those like we use it here to take and display those info's// we are passing those values/info's in to the "setCityName" witch will pass the value to the "CityName" that is used all over the code
          setCountry(data.countryName); //here we are taking the info's about the COuntry name
          setEmoji(convertToEmoji(data.countryCode)); //there is a function above 👆👆 that take cares of converting the Country name in to an emoji ...
        } catch (err) {
          setGeocodingError(err.message); //🦉🦉[TAKING INFO's BY CLICKING THE MAP]🦉🦉🌊🌊 this will take the "message" that we wrote up in the "if" statement with "trhow new Error ... etc", check also bellow 👇👇
        } finally {
          setIsLoadingGeocoding(false);
        }
      }
      fetchCityData(); // always call the function
    },
    [lat, lng]
  ); //we also must always include the values in the dependency array [lat, lng], to tell the app to reload data's every time when there is a click

  async function handleSubmit(e) {
    e.preventDefault(); //🚇🚇[ADDING A NEW CITY]🚇🚇 to stop the auto reload of the page when the button is pressed, alwways add the "preventDefault" in a single page app ====== also go and check the "CitiesContext.jsx" file to see how to take data's for the fake API🚇🚇[ADDING A NEW CITY]🚇🚇

    if (!cityName || !date) return; //return if there is no value of those that we wrote and if there is than create the object from bellow 👇

    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: { lat, lng },
    }; //here we create the store for the date's that we will get after we click somewhere on the map//=====// also go and check the "CitiesContext.jsx" file to see how to take data's for the fake API

    await createCity(newCity); // 🚇🚇[ADDING A NEW CITY]🚇🚇 this function is "async" and here is "await" because it must wait until the process is finished, otherwise will immedialty call the "navigate" from bellow, and it's not what we want, we want to call the "navigate" only after the "createCity" was called
    navigate("/app/cities");
  }

  if (isLoadingGeocoding) return <Spinner />; //🦉🦉[TAKING INFO's BY CLICKING THE MAP]🦉🦉🌊🌊will return a spinner until completed the loading

  if (!lat && !lng)
    return <Message message="Start by clicking somewhere on the map" />; //if there are no coordinations on the "form" this message will be displayed

  if (geocodingError) return <Message message={geocodingError} />; // 🦉🦉[TAKING INFO's BY CLICKING THE MAP]🦉🦉🌊🌊 will display the message Error if the user is clicking on the water

  return (
    //🚇🚇[ADDING A NEW CITY]🚇🚇 down in the <form...here..>...</form...here..> we have the "onSubmit={handleSubmit}" to add a new city 🚇🚇[ADDING A NEW CITY]🚇🚇
    <form
      className={`${styles.form} ${isLoading ? styles.loading : ""}`} //🚇🚇[ADDING A NEW CITY]🚇🚇 here we implemented multiple CSS styles in the same content by using "`...`" brackets notation and also the ternary operator, check the CSS code "Form.module.css" file to see the info's about the code
      onSubmit={handleSubmit}
    >
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        {/* <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date} 📅📅[DATE PICKER]📅📅 down we can see the <DatePicker/>///// now we need to use the CSS to transform it in something more nicer and friendly, also copy the code from the "react datepicker.com" for the css and place up in the page code, check up for the "import" about the CSS datePicker 📅📅[DATE PICKER]📅📅 ======= with the "onChange", "selected" and "dateFormat" we store the value from the calendar when the user is selecting a day, month or year and display it in place of the current date 📅📅[DATE PICKER]📅📅
        /> */}

        <DatePicker
          id="date"
          onChange={(date) => setDate(date)}
          selected={date}
          dateFormat="dd/MM/yyyy"
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        <BackButton />
      </div>
    </form> //🧭🧭[PROGRAMMATIC NAVIGATION]🧭🧭 the reusable buttons, go and check the <Button/> file and also the style file for more info's 🧭🧭[PROGRAMMATIC NAVIGATION]🧭🧭 IMPORTANT, NOTE, the function "onClick={() => navigate(-1)}", the "(-1)" means that the button will navigate back with one click let's say, or one go back, on page, etc .... /////// also note that there is the function "e.preventDefault", because when we click the button by default the browser will reload auttomatically and dont go to the previos page/form, so we need to prevent this🧭🧭[PROGRAMMATIC NAVIGATION]🧭🧭//====//🔘🔘[REUSABLE BUTTON]🔘🔘 go and check the "BackButton.jsx" file to see how to create the <BackButton/> that is created up in the <div>... here...</div>🔘🔘[REUSABLE BUTTON]🔘🔘
  );
}

export default Form;
