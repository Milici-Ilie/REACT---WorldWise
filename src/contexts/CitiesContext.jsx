// /*eslint-disable*/
import { createContext, useState, useEffect, useContext } from "react";
//🧶🧶[CONTEXT API]🧶🧶
const BASE_URL = "http://localhost:8000";

const CitiesContext = createContext(); // 🧶🧶[CONTEXT API]🧶🧶 this is the fucntion from the React that we need to create Context API "createContext" 🧶🧶[CONTEXT API]🧶🧶

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({}); //🚉🚉[CITY VIEW from API SERVER]🚉🚉 we need this "useState" here because this will gonna be a GLOBAL state, if it were a regular state, it would have been okay to use it only in the file where it was necessary, but beeing a global state we place it in this file of CONTEXT API 🚉🚉[CITY VIEW from API SERVER]🚉🚉///===/// now we must past it down 🔽 in to the context "value={{...here...}}", after passing the PROPS we need to create a function that we will use it in our "CityList.jsx"🚉🚉[CITY VIEW from API SERVER]🚉🚉

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function createCity(newCity) {
    //🚇🚇[ADDING A NEW CITY]🚇🚇 it's starts here👇
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      //🚇🚇[ADDING A NEW CITY]🚇🚇 also go down and check in the "return" section where we are calling the function

      setCities((cities) => [...cities, data]); //this is how we create a new array and add the city to our list by creating the new array with the city included in the list 🚇🚇[ADDING A NEW CITY]🚇🚇
    } catch {
      alert("There was an error loading data...");
    } finally {
      setIsLoading(false);
    }
  } //🚇🚇[ADDING A NEW CITY]🚇🚇 it's stops here 👆

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch {
      alert("There was an error creating the city.");
    } finally {
      setIsLoading(false);
    } //🚉🚉[CITY VIEW from API SERVER]🚉🚉 check the URL, there we passed after the ".../cities/${id}" the {id} to connect the app with the API info's, to know how to connect the app with the API, the id will do the connection 🚉🚉[CITY VIEW from API SERVER]🚉🚉// no go up 👆 and check the "return ()", there we added this function "getCity" and with this we can use it in our "City.jsx" file" 🚉🚉[CITY VIEW from API SERVER]🚉🚉
  }

  async function deleteCity(id) {
    ////🧈🧈[DELETE CITY]🧈🧈 this is our function to delete the city, for more info's about it please ask the Chat GPT about the mothods used ===== also check bellow 👇 in the "return" section in the <CitiesContext.Provider/> where we add this "deleteCity" function to have acces on other files, to make it reusable //🧈🧈[DELETE CITY]🧈🧈
    try {
      setIsLoading(true);
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });

      setCities((cities) => cities.filter((city) => city.id !== id));
    } catch {
      alert("There was an error deleting city");
    } finally {
      setIsLoading(false);
    }
  }

  //🧶🧶[CONTEXT API]🧶🧶down we need to create the return functionallity of the PROVIDER, in the "value" we need to pass the PROPS from above, meaning the "cities" and "isLoading" 🧶🧶[CONTEXT API]🧶🧶
  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity, ////🧈🧈[DELETE CITY]🧈🧈
      }} //🚇🚇[ADDING A NEW CITY]🚇🚇 we called the function "createCity" and other function here and this is how we can grab the function where we want
    >
      {children}
    </CitiesContext.Provider>
  ); //🧶🧶[CONTEXT API]🧶🧶 here the {children} is exactly the entire code from the "App2.jsx" file, all the files from there, this is how we are sending the PROPS from here there, in this way we keep the code much cleaner and easyer to read 🧶🧶[CONTEXT API]🧶🧶 🚉🚉[CITY VIEW from API SERVER]🚉🚉 we added the PROPS up 👆 in the "value={{here}}", and now go down 👇 and see the function that will bee sent it to the "City.jsx"🚉🚉[CITY VIEW from API SERVER]🚉🚉
}

function useCities() {
  const context = useContext(CitiesContext);

  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context; //🎢🎢[CUSTOM HOOK]🎢🎢 this is our Custom HOOK, in the "useContext()" we necessarly need to spcifie what HOOK do we need, in our case is "(CitiesContext)", because only there the PROPS will be available, if we need to snet them also in another HOOK we need to specifie the name////////// if we try to use this function in another part out of (CitiesContext) than we will get the error from our "throw new Error" 🎢🎢[CUSTOM HOOK]🎢🎢 ////====//// now go and check the "CityList.jsx" and "CountryList.jsx" files to see how to implement the HOOK  🎢🎢[CUSTOM HOOK]🎢🎢
}

export { CitiesProvider, useCities };
