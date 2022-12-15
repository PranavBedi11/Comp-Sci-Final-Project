import styles from "./signup.module.css";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "./UserAuthContext";
import { auth } from "../../config/fire";
import { Link } from "react-router-dom";
/**
 * The `SignUp` component is a form that allows users to create a new account. It displays
 * buttons that allow users to sign up using third-party authentication providers, such as
 * Google or Facebook. It also includes fields for entering an email and password, which
 * are used to sign up for a local account.
 *
 * @returns {JSX.Element} A React component that renders the sign-up form.
 */
const SignUp = () => {
  const auth_one = useAuth();
  const navigate = useNavigate();
/**

*Logs the current auth_one.user value to the console whenever it changes.
*@returns {void}
*/

  useEffect(() => {
    console.log(auth_one.user);
  }, [auth_one.user]);
/**
 * Handles form submission by extracting the email and password values from the form data
 * and calling the `auth.signInWithEmailAndPassword()` function with these values.
 * 
 * @param {Event} event - The form submission event
 * @returns {void}
 */
  const handleFormSubmission = (event) => {
    event.preventDefault();
/**

*Handles form submission by extracting the email and password values from the form data
*and calling the auth_one.signInWithEmailAndPassword() function with these values.
*If the sign-in is successful, the user is redirected to the /view route. If there is
*an error, the error message is logged to the console.
*@param {Event} event - The form submission event
*@returns {void}
*/
    const { email, password } = Object.fromEntries(new FormData(event.target));
    auth_one
      .createUserWithEmailAndPassword(auth, email, password)
      .then((user) => navigate("/login"))
      .catch((error) => console.error(error.message));
  };

  return (
    <div className={styles.container}>
      <h1 style={{ marginBottom: "2rem" }}>SignUp</h1>
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
          Sign up
        </button>
        <div className="singup-link">
          <p>
            Have An Account?{" "}
            <Link className="go-back" to="/login">
              Login
            </Link>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
