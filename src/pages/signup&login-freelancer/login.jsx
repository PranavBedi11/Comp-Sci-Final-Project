import styles from "./signup.module.css";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "./UserAuthContext";
import { auth } from "../../config/fire";
import { Link } from "react-router-dom";
/**
 * The `login` component is a form that allows users to log into an exisiting account. It displays
 * buttons that allow users to login using third-party authentication providers, such as
 * Google or Facebook. It also includes fields for entering an email and password, which
 * are used to login for a local account.
 *
 * @returns {JSX.Element} A React component that renders the login form.
 */
const Login = (props) => {
  const auth_one = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(auth_one.user);

    if (auth_one.user) navigate("/views");
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

Handles form submission by extracting the email and password values from the form data
and calling the auth_one.signInWithEmailAndPassword() function with these values.
If the sign-in is successful, the user is redirected to the /view route. If there is
an error, the error message is logged to the console.
@param {Event} event - The form submission event
@returns {void}
*/
    const { email, password } = Object.fromEntries(new FormData(event.target));
    auth_one
      .signInWithEmailAndPassword(auth, email, password)
      .then((user) => navigate("/view"))
      .catch((error) => console.log(error.message));
  };

  return (
    <div className={styles.container}>
      <h1 style={{ marginBottom: "2rem" }}>Log In</h1>
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
        <div className="singup-link">
          <p>
            Dont Have An Account?{" "}
            <Link className="go-back" to="/signup">
              Register
            </Link>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
