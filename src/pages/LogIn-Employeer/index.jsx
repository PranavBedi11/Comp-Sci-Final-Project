import { useState } from "react"; 
import { auth } from "../../config/fire";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate  } from "react-router-dom";
import "./style.css";
import { Link } from 'react-router-dom'

const Logine = () => {

    const navigate = useNavigate();


    const [loginEmail, setloginEmail] = useState("");
    const [loginPassword, setloginPassword] = useState("");




    const login = async () => {
        try {
          await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
          );
          console.log("Worked");
          navigate('/signupe');
        } 
        catch (error) {
            console.log("Error");
        }
    };
 


   



return (

    <div class="center">
        <h1>Login</h1>
            <div className="form">
                <div className="txt-field">
                    <input placeholder="Email ..."  onChange={(event) => {setloginEmail(event.target.value); }} />
                    
                </div>
                <div className="txt-field">
                    <input placeholder="Password ..."  type="password" onChange={(event) => {setloginPassword(event.target.value); }} />
                </div>
                
        

                <button className='btn' onClick={login}>Login</button>
                <div className="singup-link">
                    <p>Dont Have An Account? <Link to='/signupe'>Register</Link> </p>
                </div>
            </div>
           



       
    </div>
    )
}
export default Logine