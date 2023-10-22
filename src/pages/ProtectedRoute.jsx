import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";

function ProtectedRoute({ children }) {
  //🚫🚫[UNAUTHORIZED AUTHENTIFICATION]🚫🚫this is the function that will stop the users witch are not LOGED IN to go around in the application 🚫🚫[UNAUTHORIZED AUTHENTIFICATION]🚫🚫

  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(function () {
    if (!isAuthenticated) navigate("/");
  });

  return isAuthenticated ? children : null; //🚫🚫[UNAUTHORIZED AUTHENTIFICATION]🚫🚫 now everytime when the user will reload the page the app will LOGED OUT the user and return him to the parent page
}

export default ProtectedRoute;
