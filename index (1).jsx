import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/fire";

/**

*The View component is a functional React component that displays a list of posts from a
*Firestore database. It uses the useState and useEffect hooks from the React library to
*manage the component's state and lifecycle.
*The posts are retrieved from the database using the getDocs function from the firebase/firestore
*package, and are added to the component's state using the setPostList function. The posts are then
*mapped over and rendered in the component's JSX.
*@returns {React.Element} A React element representing the View component.
*/

function View() {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  /**

*The useEffect hook is used to call the getPosts function when the component is mounted.
*This ensures that the posts are retrieved and added to the component's state when the
*component is rendered.
*@returns {void}
*/
  
  useEffect(() => {
    
    /**

*The getPosts function is used to retrieve all posts from the database. It uses
*the getDocs function from the firebase/firestore package to retrieve all the
*documents in the posts collection. The retrieved posts are then processed and
*added to the component's state using the setPostList function.
*@async
*@returns {Promise<void>} A promise that resolves when the operation is complete.
*/
    
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  },);

 
  return (
    <div className="ViewPage">
      {postLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1> {post.title}</h1>
              </div>
            </div>
            <div className="postTextContainer"> {post.postText} </div>
            <h3>@{post.author.email}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default View;
