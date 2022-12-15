import { useState } from "react"; 
import { auth } from "../../config/fire";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate  } from "react-router-dom";
import "./style.css"
import { Link } from 'react-router-dom'



 /**
  * The Logine component is a form that allows users to log in to their account. It includes
  * fields for entering an email and password, and a button for submitting the form. If the login
  * is successful, it navigates to a different page. If the user does not have an account, they
  * can navigate to the /signupe page to register.
  *
  * @returns {JSX.Element} A React component that renders the login form.
 */

const Logine = () => {
    
    const navigate = useNavigate();


    const [loginEmail, setloginEmail] = useState("");
    const [loginPassword, setloginPassword] = useState("");
  


      /**
        * This function attempts to log the user in using their email and password.
        * If the login is successful, the user will be redirected to the page with the ability to post.
        *
        * @async
        *
        * @returns {promise} - A promise that checks if the login is successful, or rejects if there is an error.
        *                   
        */
    const login = async () => {
        

        try {
          await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
          );
          console.log("Worked");
          navigate('/post');
        } 
        catch (error) {
            console.log("Error");
        }
    };
 


return (

    <div class="center">
        <h1>Login As Employeer</h1>
            <div className="form">
                <div className="txt-field">
                    <h3>Email</h3>
                    <input placeholder="Email ..."  onChange={(event) => {setloginEmail(event.target.value); }} />
                    
                </div>
                <div className="txt-field">
                    <h3>Passowrd</h3>
                    <input placeholder="Password ..."  type="password" onChange={(event) => {setloginPassword(event.target.value); }} />
                </div>
                
        

                <button className='btn' onClick={login}>Login</button>
                <div className="singup-link">
                    <p>Dont Have An Account? <Link className="go-back" to='/signupe'>Register</Link> </p>
                </div>
        </div>
           
    </div>
    )
}
export default Logine