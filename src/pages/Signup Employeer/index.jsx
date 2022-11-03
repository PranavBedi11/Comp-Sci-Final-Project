import { useState } from "react"; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/fire";
import "../LogIn-Employeer/style.css";
import { Link } from 'react-router-dom'


const Singupe = () => {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <div class="center">
      <h1> Please Register <br></br>(we need users)  </h1>
      <div className="form">
        <div className="txt-field">
          <input placeholder="Email ..." onChange={(event) => {setRegisterEmail(event.target.value);}}/>
        </div>
        <div className="txt-field">
          <input placeholder="Password ..."onChange={(event) => {setRegisterPassword(event.target.value);}} />
        </div>
    
        <button className='btn' onClick={register}> Create User</button>
        <div className="singup-link">
              <p>Have An Account? <Link to='/'>Login</Link> </p>
        </div>
      </div>



    </div>
  );
};

export default Singupe