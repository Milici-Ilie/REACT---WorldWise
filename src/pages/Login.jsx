import { useEffect, useState } from "react";
import { useAuth } from "../contexts/FakeAuthContext"; //👥👥[FAKE LOGIN]👥👥
import PageNav from "../components/PageNav";
import styles from "./Login.module.css";
import Button from "../components/Button"; //👥👥[FAKE LOGIN]👥👥 here we are importing the Button and down at the bottom of the code we create the Button👥👥[FAKE LOGIN]👥👥
import { useNavigate } from "react-router-dom";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  const { login, isAuthenticated } = useAuth(); //👥👥[FAKE LOGIN]👥👥
  const navigate = useNavigate(); //👥👥[FAKE LOGIN]👥👥

  function handleSubmit(e) {
    e.preventDefault(); //👥👥[FAKE LOGIN]👥👥

    if (email && password) login(email, password);
  } //👥👥[FAKE LOGIN]👥👥

  useEffect(
    function () {
      if (isAuthenticated) navigate("/app", { replace: true }); //👥👥[FAKE LOGIN]👥👥 ❗❗❗❗here we have a very important part, meaning the {replace: true}, when the user wll LOGIN in the app he will be sent to the "Form" page, is another page and not the parent page, and if we want to go back to the parent page will not work ... only if we use this "replace:true"❗❗❗❗👥👥[FAKE LOGIN]👥👥
    },
    [isAuthenticated, navigate]
  ); //👥👥[FAKE LOGIN]👥👥 here if the "isAutheticated" is succesfull/true than will sent the user to the "/app" page 👥👥[FAKE LOGIN]👥👥

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* 👥👥[FAKE LOGIN]👥👥 here in the <form></form> from above we implement the function "handleSubmit" from above 👥👥[FAKE LOGIN]👥👥 */}
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary">Login</Button>
          {/* // 👥👥[FAKE LOGIN]👥👥  here 👥👥[FAKE LOGIN]👥👥*/}
        </div>
      </form>
    </main>
  );
}
