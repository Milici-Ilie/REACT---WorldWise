import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import AppLayout from "./pages/AppLayout"; //🎨🎨[CSS MODULES STYLE]🎨🎨
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form"; //🧭🧭[PROGRAMMATIC NAVIGATION]🧭🧭 go please and check the file 🧭🧭[PROGRAMMATIC NAVIGATION]🧭🧭

const BASE_URL = "http://localhost:8000"; //🌆🌆[CITIES LIST]🌆🌆 this is our URL fake API from where we will take info's about cities and country's

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //🌆🌆[CITIES LIST]🌆🌆 here we are creating the "state's" that we need to connect with our fake API, or a real time API/URL 🌆🌆[CITIES LIST]🌆🌆
  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true); //here we are setting the "setLoading" to true to change the "isLoadingg" state from "false" to "true"
        const res = await fetch(`${BASE_URL}/cities`); //🌆🌆[CITIES LIST]🌆🌆 here we are requesting the data's/info's from the fake API 🌆🌆[CITIES LIST]🌆🌆
        const data = await res.json(); //🌆🌆[CITIES LIST]🌆🌆 here we are transorming those info's into ".json" data 🌆🌆[CITIES LIST]🌆🌆
        setCities(data); //🌆🌆[CITIES LIST]🌆🌆 we transfer the data from ".json" to the "setCities"🌆🌆[CITIES LIST]🌆🌆
      } catch {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false); // here we are stopping the loading
      }
    }
    fetchCities(); //🌆🌆[CITIES LIST]🌆🌆 we also need to cal the function to take effect 🌆🌆[CITIES LIST]🌆🌆
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />

        <Route path="app" element={<AppLayout />}>
          <Route
            index
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />

          <Route path="cities/:id" element={<City />} />

          <Route
            path="countries"
            element={<CountryList cities={cities} isLoading={isLoading} />}
          />
          <Route path="form" element={<Form />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter> //🔗🔗[PAGES LINK CONNECTIONS]🔗🔗 here we the "Routes" with our pages, buttons, links by using the "path="// for ex: check please the "Homepage.jsx" to see the connection there 🔗🔗[PAGES LINK CONNECTIONS]🔗🔗//////////////🍥🍥[NESTED ROUTES]🍥🍥 here we are including the links inside of our <App/> link // now we must go and check the "Sidebar.jsx" file/////NOTE that there is a <Route/>, the first one, that contains "index", this will be the default/parent file of our "App", the box that containes more links🍥🍥[NESTED ROUTES]🍥🍥////////////////// 🌆🌆[CITIES LIST]🌆🌆 Also check those files <Route index element={<CityList cities={cities} isLoading={isLoading} />} /> ..... here we are connecting with the "CityList"... also check the "CityList.jsx" file🌆🌆[CITIES LIST]🌆🌆////===========////// 🌞🌞[STORING UI STATE]🌞🌞 here "path="cities/:id" the "path" represents the "cities" witch is the selected box at the moments, the content with the cities and the "/:id" is the rest of the code, for ex: lg=longitude or lat=latitude, or anything else, depending on the API info's// also check the "City" file// we created this path that links to the <City/> component, so whenever the URL takes the shape of "cities/:id" will acces the // also go and check please the "CityItem.jsx" file<City/> 🌞🌞[STORING UI STATE]🌞🌞 //============ 🧭🧭[PROGRAMMATIC NAVIGATION]🧭🧭 check the " <Route path="form" element={<Form />} />"🧭🧭[PROGRAMMATIC NAVIGATION]🧭🧭
  );
}

export default App;
