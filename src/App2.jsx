import { BrowserRouter, Route, Routes } from "react-router-dom";

import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import AppLayout from "./pages/AppLayout"; //🎨🎨[CSS MODULES STYLE]🎨🎨
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";
import ProtectedRoute from "./pages/ProtectedRoute"; //🚫🚫[UNAUTHORIZED AUTHENTIFICATION]🚫🚫 here we are importing the function from the "ProtectedRout" file, go down and check how to implement this functionality to make the UNAUTHORIZED AUTHENTIFICATION to work and not let the user to acces the pages if he is not LOGED IN==== go down at the "LayoutApp" and check there🚫🚫[UNAUTHORIZED AUTHENTIFICATION]🚫🚫
import { AuthProvider } from "./contexts/FakeAuthContext"; // 👥👥[FAKE LOGIN]👥👥 down you will see that we must include all the code inside of our <AuthProvider/> in order to make effect because the data's from the "LOGIN" and "LOGOUT" will affect all the code👥👥[FAKE LOGIN]👥👥

function App() {
  return (
    //🧶🧶[CONTEXT API]🧶🧶 we created a new file named "CitiesContext.jsx" where we transfered the "useEffect function". And also we deleted the PROPS from bellow at the <Route ... {<CityList/>}/> and <Route ... {<CountryList/>}/> and replaced the PROPS inside of the direct files using CONTEXT API🧶🧶[CONTEXT API]🧶🧶 //////====== /////// 🧶🧶[CONTEXT API]🧶🧶 so, now we included the entire code as {childre} inside the <CitiesProvider> ... code {children}...</CitiesProvider>, this code named {children} is equal with the {children} from the "CitiesContext.jsx" file, basically is exactly the same, in the "CitiesContext.jsx" the {children} is exactly this code, and all the values from that we implemented there are applying also here in our code 🧶🧶[CONTEXT API]🧶🧶
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="login" element={<Login />} />

            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              } //🚫🚫[UNAUTHORIZED AUTHENTIFICATION]🚫🚫 here, we included the "AppLayout" inside of our "ProtectedRoute" because all the application is running trough the "AppLayout", there are the connection, so if the user will not be logged in all the app will stop 🚫🚫[UNAUTHORIZED AUTHENTIFICATION]🚫🚫now everytime when the user will reload the page the app will LOGED OUT the user and return him to the parent page🚫🚫[UNAUTHORIZED AUTHENTIFICATION]🚫🚫
            >
              <Route index element={<CityList />} />
              <Route path="cities" element={<CityList />} />

              <Route path="cities/:id" element={<City />} />

              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
    //🔗🔗[PAGES LINK CONNECTIONS]🔗🔗 here we the "Routes" with our pages, buttons, links by using the "path="// for ex: check please the "Homepage.jsx" to see the connection there 🔗🔗[PAGES LINK CONNECTIONS]🔗🔗//////////////🍥🍥[NESTED ROUTES]🍥🍥 here we are including the links inside of our <App/> link // now we must go and check the "Sidebar.jsx" file/////NOTE that there is a <Route/>, the first one, that contains "index", this will be the default/parent file of our "App", the box that containes more links🍥🍥[NESTED ROUTES]🍥🍥////////////////// 🌆🌆[CITIES LIST]🌆🌆 Also check those files <Route index element={<CityList cities={cities} isLoading={isLoading} />} /> ..... here we are connecting with the "CityList"... also check the "CityList.jsx" file🌆🌆[CITIES LIST]🌆🌆////===========////// 🌞🌞[STORING UI STATE]🌞🌞 here "path="cities/:id" the "path" represents the "cities" witch is the selected box at the moments, the content with the cities and the "/:id" is the rest of the code, for ex: lg=longitude or lat=latitude, or anything else, depending on the API info's// also check the "City" file// we created this path that links to the <City/> component, so whenever the URL takes the shape of "cities/:id" will acces the // also go and check please the "CityItem.jsx" file<City/> 🌞🌞[STORING UI STATE]🌞🌞 //============ 🧭🧭[PROGRAMMATIC NAVIGATION]🧭🧭 check the " <Route path="form" element={<Form />} />"🧭🧭[PROGRAMMATIC NAVIGATION]🧭🧭
  );
}

export default App;
