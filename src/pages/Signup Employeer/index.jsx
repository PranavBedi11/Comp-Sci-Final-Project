import { useState } from "react"; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/fire";
import "../LogIn-Employeer/style.css";
import { Link } from 'react-router-dom'
import { useNavigate  } from "react-router-dom";


/**
  * The Singupe component is a form that allows users to register for an account. It includes
  * fields for entering an email and password, and a button for submitting the form. If the user
  * is registered successfully, it logs the user object to the console. If the user already has
  * an account, they can navigate to the login page to log in.
  *
  * @returns {JSX.Element} A React component that renders the registration form.
  */
const Singupe = () => {
  
  const navigate = useNavigate();


  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");



  /**
    * The register function attempts to create a new user by calling createUserWithEmailAndPassword()
    * with the provided email and password. If the user is created successfully, it logs the
    * user object to the console and naviagtes them to the login page. If an error occurs, it logs the error message to the console.
    *
    * @async
    * 
    * @returns {Promise} A promise that resolves if the user is created successfully and rejects if an error occurs.
    */
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      navigate('/logine');
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <div class="center">
      <h1> Please Register As Employeer <br></br>(we need users)  </h1>
      <div className="form">
        <div className="txt-field">
          <h3>Gmail</h3>
          <input placeholder="Email ..." onChange={(event) => {setRegisterEmail(event.target.value);}}/>
        </div>
        <div className="txt-field">
          <h3>Password</h3>
          <input placeholder="Password ..." onChange={(event) => {setRegisterPassword(event.target.value);}} />
        </div>

        <button className='btn' onClick={register}> Create User</button>
        <div className="singup-link">
              <p>Have An Account? <Link className="go-back" to='/'>Login</Link> </p>
        </div>
      </div>



    </div>
  );
};

export default Singupe