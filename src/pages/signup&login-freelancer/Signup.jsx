import styles from "./signup.module.css";
import "./index.css"

import { useEffect } from "react";
import { useAuth } from "./UserAuthContext";
import { auth } from "../../config/fire";

const SignUp = (props) => {
  const auth_one = useAuth();

  useEffect(() => {
    console.log(auth_one.user);
  }, [auth_one.user]);

  const handleFormSubmission = (event) => {
    event.preventDefault();

    const { email, password } = Object.fromEntries(new FormData(event.target));

    auth_one.signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <div className={styles.container}>
      <div>
        <h1>{props.title}</h1>
        <div className={styles.provider_row}>
          {auth_one.providers.map((provider, idx) => (
            <div
              onClick={() => auth_one.signInWithPopup(auth, provider.provider)}
              key={idx}
              className={styles.provider_button}
            >
              {provider.icon}
            </div>
          ))}
        </div>
      </div>
      <form className={styles.form} onSubmit={handleFormSubmission}>
        <fieldset className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            autoComplete="current-password"
            name="email"
            type="email"
            id="email"
            placeholder="Gmail@gmail.com"
          />
        </fieldset>
        <fieldset className={styles.field}>
          <label htmlFor="password">Password</label>
          <input
            autoComplete="current-password"
            name="password"
            type="password"
            id="password"
            placeholder="SUPER_SECRET_PASSWORD"
          />
        </fieldset>
        <button type="submit" className={styles.sign_in}>
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SignUp;
