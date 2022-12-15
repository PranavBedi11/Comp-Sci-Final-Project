import "./index.css";
import React from 'react'
import { useState } from 'react'
import {addDoc, collection} from 'firebase/firestore'
import { db, auth } from '../../config/fire'
import { useNavigate  } from "react-router-dom";
import Nav from "../../Components/navbar";




/**
 * The CreatePost function is a React component that is used to create a new post. It
 * uses two state variables, title and postText, to store the user's input. The
 * createPost function is called when the user clicks the submit button.
 *
 * @returns {JSX.Element} The rendered React component and Navbar.
 */
const CreatePost = () => {
    const [title, setTitle] = useState("")
    const [postText, setPostText] = useState("")

    const navigate = useNavigate();

    const postsCollectionRef = collection(db, "posts")
    

    /**
      * The createPost function is used to create a new post in the database. It uses
      * the addDoc function from the firebase/firestore package to add a new document
      * to the posts collection with the given title, post text, and author information and after thats finished it naviagtes the user to where they can view their listing.
      *
      * @async
      * 
      * @returns {Promise} A promise that resolves when the data has been entered into the databse
      */
    const createPost = async () =>{
        await addDoc (postsCollectionRef, {title, postText, author: {email: auth.currentUser.email , id: auth.currentUser.uid }})
        navigate('/view')
       
    };

  return (
    <>
    <Nav />
    <div className="post">
        <div className="cpContainer">
            <h1>Create A Listing</h1>
            <h3>This listing will showup in the viwing page and delete it once your job has been complete</h3>
            <div className="form">
                <div className="inputGp">
                    <label>Job Title: </label>
                    <input placeholder='Title...' onChange={(event) => {setTitle (event.target.value);}}/>
                </div>
                <div className="inputGp">
                    <div className="txt">
                        <label>What is the job about: (Make Sure To Include Contatct information) </label>
                    </div>
                    <textarea placeholder="Type Here...(Including Name Would Be Appreciated)" onChange={(event) => {setPostText (event.target.value);}}/>
                </div>
                <button className='btn' onClick={createPost}> Submit Post </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default CreatePost