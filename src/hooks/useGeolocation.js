import { useState } from "react";

export function useGeolocation(defaultPosition = null) {
  //💠💠[CURRENT GEOLOCATION]💠💠 we need to use "export" to be able to export the function from here, and we use as a name the name himself of the function, in our case is "useGeolocation"/////------///// now go and check the "Map.jsx" file💠💠[CURRENT GEOLOCATION]💠💠
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState(defaultPosition);
  const [error, setError] = useState(null);

  function getPosition() {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return { isLoading, position, error, getPosition };
}
