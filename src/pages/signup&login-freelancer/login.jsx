import styles from "./signup.module.css";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "./UserAuthContext";
import { auth } from "../../config/fire";
import { Link } from "react-router-dom";

const Login = (props) => {
  const auth_one = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(auth_one.user);

    if (auth_one.user) navigate("/views");
  }, [auth_one.user]);

  const handleFormSubmission = (event) => {
    event.preventDefault();

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
