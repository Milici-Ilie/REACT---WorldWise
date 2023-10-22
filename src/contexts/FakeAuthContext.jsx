import { createContext, useContext, useReducer } from "react";
//👥👥[FAKE LOGIN]👥👥 also go and check the "App2.jsx" file to see how to import this file of FAKE LOGIN
const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true }; //this is the PROP that we created for the "LOGIN" funnctionallity

    case "logout":
      return { ...state, user: null, isAuthenticated: false }; // now we must go bellow at the "return" content and pass those values there

    default:
      throw new Error("Unknown action");
  }
}

const FAKE_USER = {
  name: "Cristian",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
}; //👥👥[FAKE LOGIN]👥👥 this is an fake object that contains info's about the LOGIN user

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  ); //this is the variable where we destructured the "initialState" from above 👆 and add the second value called "dispatch" or any name. after the "userReducer" we add inside the (...here...) the "reducer" witch is the function from above and the "initialState" witch is the variable from above

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
  } //👥👥[FAKE LOGIN]👥👥this function will take data's to LOGIN the user

  function logout() {
    dispatch({ type: "logout" });
  } //this will logout the user

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
//👥👥[FAKE LOGIN]👥👥
function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider"); // this will check if the Custom HOOK is used in different situation, this is a reusable code so that's why

  return context;
}

export { AuthProvider, useAuth }; // we also need to call those 2 functions to make them work
