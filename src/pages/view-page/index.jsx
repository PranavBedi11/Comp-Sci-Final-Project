import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../../config/fire";
/**

 * The View component is a functional React component that displays a list of posts from a
 * Firestore database. It uses the useState and useEffect hooks from the React library to
 * manage the component's state and lifecycle.
 * The posts are retrieved from the database using the getDocs function from the firebase/firestore
 * package, and are added to the component's state using the setPostList function. The posts are then
 * mapped over and rendered in the component's JSX.
 * The View component accepts a isAuth prop that determines whether or not the current user is
 * authenticated. If the user is authenticated and the post's author ID matches the user's ID, a
 * delete button is rendered for the post, which allows the user to delete the post when clicked.
 * The deletePost function is used to delete the post from the database.
 *
 * @param {boolean} isAuth A boolean that indicates whether or not the current user is authenticated.
 *
 * @returns {React.Element} A React element representing the View component.

 */

function View({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [deletePost]);



    /**
     * The deletePost function is used to delete a post from the database. It uses
     *the deleteDoc function from the firebase/firestore package to delete a document
     *from the posts collection with the given ID.
     * @param  {string} id The ID of the post to delete.
     * 
     * @async
     * 
     * @returns {Promise} A promise that resolves when the item is deleted.
     */
  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  return (
    <div className="ViewPage">
      {postLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1> {post.title}</h1>
              </div>
              <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    {" "}
                    &#128465;
                  </button>
                )}
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