/* eslint-disable */
import {
  UNSAFE_useScrollRestoration,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  useMap,
  useMapEvents,
} from "react-leaflet"; //🌎🌎[MAP NAVIGATION/LEAFLET]🌎🌎 here we imported the info's for the MAP NAVIGATION, go and check at the bottom of the page the rest of the code 🌎🌎[MAP NAVIGATION/LEAFLET]🌎🌎

import styles from "./Map.module.css";
import Button from "./Button";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesContext";
import { useGeolocation } from "../hooks/useGeolocation"; //💠💠[CURRENT GEOLOCATION]💠💠go down and check the variable 👇👇// 💠💠[CURRENT GEOLOCATION]💠💠
import { useUrlPosition } from "../hooks/useUrlPosition"; //🦉🦉[TAKING INFO's BY CLICKING THE MAP]🦉🦉go down and check the variable 👇👇// 🦉🦉[TAKING INFO's BY CLICKING THE MAP]🦉🦉

//🔆🔆[2ND WAY OF STORING IN THE URL]🔆🔆
function Map() {
  // const navigate = useNavigate(); //🧭🧭[PROGRAMMATIC NAVIGATION]🧭🧭 this HOOK is used to move to any URL, check the "onClick" function bellow 🔽 inside the <div></div> // ❗❗ we dezactivated the "const navigate=useNavigate()" from here because we use down at the bottom of the code in the function "DetectClick()" ❗❗

  const { cities } = useCities(); //📌📌[MARKERS ON MAP]📌📌note that here we use a GLOBAL CUSTOM HOOK, "useCities", to see more details about it go and check the link from the "import" from above//// NOTE that the Marker is changing depending on the "lat" and "lng" 📌📌[MARKERS ON MAP]📌📌

  const [mapPosition, setMapPosition] = useState([40, 0]); //🌎🌎[MAP NAVIGATION/LEAFLET]🌎🌎 here we created this "useState" variable to give the "Map function" a position where to start, beeing "useState" is rerender, so the values will change every time a new position is set. The "lat" is the first value, and the second is the "lng" [40=lat, 0=lng] ///====/// now we must replace down in the "return" the {position} with the {mapPosition} that we just created at the <Marker ...>... code...</Marker> and the  <MapContainer>...code...</MapContainer> 👇👇🌎🌎[MAP NAVIGATION/LEAFLET]🌎🌎

  //📍📍[POP-UP ON THE MAP]📍📍  we need this STATE "setMapPosition" to take the current location of our map, go and check the "useEffect" from bellow 👇 📍📍[POP-UP ON THE MAP]📍📍

  // const [searchParams] = useSearchParams(); //🔆🔆[2ND WAY OF STORING IN THE URL]🔆🔆 note that here we use a functionallity from the REACT to take info's from the URL from the API by using "useSearchParams", by taking those info's from the URL the function will know what to display depending on what we tell to display, those values will be taken wiith the exact names like the two variables from bellow "lat" and "lng" ////🦉🦉[TAKING INFO's BY CLICKING THE MAP]🦉🦉 we  cancel the functionallity of those variables because we created a custom HOOK, check the "useUrlPosition", so now we will import the functionallity from there, but at the point of using only this functionality those variables are essential// to see the variable that connect with the custom HOOK go down 👇 and check the "const [mapLat, mapLng]=useUrlLocation()" .............

  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation(); //🛑💠💠[CURRENT GEOLOCATION]💠💠 here we are calling the PROPS from the custom HOOK and we rename the PROPS////-------///// now go and check the <Button/> from the "return", bellow 👇👇 💠💠[CURRENT GEOLOCATION]💠💠

  // const mapLat = searchParams.get("lat"); //here we must type exactly the name that we gave in the "CityItem.jsx" file in the <Link/> URL, "to={`....link ....`}, check the "CityItem.jsx" file 🔆🔆[2ND WAY OF STORING IN THE URL]🔆🔆 ////🦉🦉[TAKING INFO's BY CLICKING THE MAP]🦉🦉 we  cancel the functionallity of those variables because we created a custom HOOK, check the "useUrlPosition", so now we will import the functionallity from there, but at the point of using only this functionality those variables are essential// to see the variable that connect with the custom HOOK go down 👇 and check the "const [mapLat, mapLng]=useUrlLocation()" .............

  // const mapLng = searchParams.get("lng"); // Go and check also the "City.jsx" file ////🦉🦉[TAKING INFO's BY CLICKING THE MAP]🦉🦉 we  cancel the functionallity of those variables because we created a custom HOOK, check the "useUrlPosition", so now we will import the functionallity from there, but at the point of using only this functionality those variables are essential// to see the variable that connect with the custom HOOK go down 👇 and check the "const [mapLat, mapLng]=useUrlLocation()" .............

  const [mapLat, mapLng] = useUrlPosition(); //🦉🦉[TAKING INFO's BY CLICKING THE MAP]🦉🦉 here we created the Custom HOOK for the 3 variables that we canceled, to see the custom HOOK go and check the "useUrlPosition.js"/ also go and check the "Form.jsx" file🦉🦉[TAKING INFO's BY CLICKING THE MAP]🦉🦉

  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  ); //📍📍[POP-UP ON THE MAP]📍📍  here we are implementing the "setMapPosition" that will check if the "mapLat" and "mapLng" are take any value than go and set the "setMapPosition" with the new values that it takes before those two, meaning that after we clicked a city and see where it is, when we click the button "BACK" it will not go in another location, but will remain unchanged, in the same position /// ❗❗❗now we will sent the "mapPosition" PROP from above 👆 down 🔻🔻 in the <MapContainer center={mapPosition} ... code .../❗❗❗now we will sent the "mapPosition" PROP from above 👆 down 🔻🔻 in the <MapContainer center={mapPosition} ... code .../>❗❗❗❗❗❗ 📍📍[POP-UP ON THE MAP]📍📍

  useEffect(
    function () {
      if (geolocationPosition)
        setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
    },
    [geolocationPosition]
  ); //💠💠[CURRENT GEOLOCATION]💠💠 here will check if the current location "geolocationPosition" than everithyng will stay the same, otherwise will call the "setMapPosition" and set the new location depending on the ".lat" and ".lng"💠💠[CURRENT GEOLOCATION]💠💠

  return (
    //🧭🧭[PROGRAMMATIC NAVIGATION]🧭🧭 here we are including the "onClick" function by using the "useNavigate" HOOK provided by REACT Router

    //💠💠[CURRENT GEOLOCATION]💠💠 check the button from bellow, one line code bellow to see the implementation.//// the "type=position" represents the class from "Button.module.css", the "onClick" is equal with the "getPosition" from the PROPS hook from above//// also we are implemmented a rendering position, first the button will display the "Use your position" if the "isLoadingPosition" is not accesed, otherwise, if it is acces than will display the "Loading..." and get the current position//====/// and also to make the button to dissappear after the user gets his position we must use the "!GeolocationPosition &&(...code...)"💠💠[CURRENT GEOLOCATION]💠💠//=====/// 💠💠[CURRENT GEOLOCATION]💠💠 now after we clicked the button we get the current position frm the "Components" from the Console browser by checking the TREE and "Map" section to move the Map to the current position//====/// now go and check above 👆👆 before the "return" section the "useEffect" where we create a function that moves the MAP to the current position of the user💠💠[CURRENT GEOLOCATION]💠💠
    <div className={styles.mapContainer}>
      {!geolocationPosition && (
        <Button type="position" onClick={getPosition}>
          {isLoadingPosition ? "Loading..." : "Use your position"}
        </Button>
      )}
      <MapContainer
        center={mapPosition} // HERE 📍📍[POP-UP ON THE MAP]📍📍
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span> <span>{city.cityName}</span>
            </Popup>
          </Marker> //📍📍[POP-UP ON THE MAP]📍📍 here we added the name and the flag at the POPUP when this is clicked, go at the bottom of the code to check how to move the map by clicking the city's from the list 👇👇📍📍[POP-UP ON THE MAP]📍📍
        ))}
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div> //🔆🔆[2ND WAY OF STORING IN THE URL]🔆🔆 there we have a simpe <button>Change pos</button>, here we see the power of the React, by sending info's with the "setSearchParams" in the "SearchParamas" we change the data's/info's everywhere, in the URL, in the contents, etc. just by clicking this button, so this is very powerfull, because if we compare with a click on the map for exemple this click will also change those info's everywhere 🔆🔆[2ND WAY OF STORING IN THE URL]🔆🔆//========

    // 🌎🌎[MAP NAVIGATION/LEAFLET]🌎🌎up we copyed the code from "Leaflet", the <MapContaier ...code...>... code ... </MapContaier>, inside of this code we can make changes to the Map, to the Marker and even the Popusp's// ❗also we need to import all the PROPS from the "react-leaflet"❗ ourselved, look up at the page and chec the "import" for the "react-leaflet"///===/// by changing "scrollWheelZoom={false}" from "false" to "true" will give the possibility to zoom in and zoom out the map using the mouse srooll🌎🌎[MAP NAVIGATION/LEAFLET]🌎🌎

    //📌📌[MARKERS ON MAP]📌📌 in the "return" from above, after the <TileLayer></TileLayer> we have the {cities.map((city) => (<Marker ... etc... code.../>}, so here we have the </Marker>, we created a ".map" method to loop over the array of "city's" and than take the coordinates, like you see in the code at "position" the "lat" and "lng"📌📌[MARKERS ON MAP]📌📌
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
} //📍📍[POP-UP ON THE MAP]📍📍 this is our component that we need to move the MAP according to the city that we click from our "city list", to automatically take tha "lat" and "lng" from that city 📍📍[POP-UP ON THE MAP]//====/// now go and check in the "return" at the end and see how we implemented that functionallity//====/// there we included in the "position" the "mapLat" and "mapLng" wich are variables from above that make connection with the back info's from the city's📍📍[POP-UP ON THE MAP]📍📍

function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`), //🏡🏡[ADDING A NEW CITY]🏡🏡 here we created the "event" that will create a new link when the user is clicking on the map by taking in the real time those coordinates from where he clicked, "lat" and "lng"//==// the function "click" will navigate to the (`...linl...`), this format of the link is the same as the link from our APP, but here we are creating the "lat" and "lng" depending on the click from the MAP🏡🏡[ADDING A NEW CITY]🏡🏡

    // console.log(e); // logging this (e) to the console we can see the result and the data that we get from the API in real time, there we will find also the "lat" and the "lng"
  });
} //🏡🏡[ADDING A NEW CITY]🏡🏡 here we are creating the functionallity to create and take the data's from the map when we click on int//=====/// also we need to add this "function" up in the <MapContainer>...here... </MapContainer>🏡🏡[ADDING A NEW CITY]🏡🏡

export default Map;
