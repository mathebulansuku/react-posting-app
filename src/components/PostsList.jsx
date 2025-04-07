import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";
import { useState } from "react";
import Modal from "./Modal";

function PostsList({ isPosting, onStopPosting }) {
  const [change, setChange] = useState("");
  const [authorChange, setAuthorChange] = useState("");

  function onBodyChangeHandler(event) {
    setChange(event.target.value);
  }

  function onAuthorChangeHandler(event) {
    setAuthorChange(event.target.value);
  }
  return (
    <>
      {isPosting ? (
        <Modal onClose={onStopPosting}>
          <NewPost
            onBodyChange={onBodyChangeHandler}
            onAuthorChange={onAuthorChangeHandler}
            onCancel={onStopPosting}
          />
        </Modal>
      ) : null}
      <ul className={classes.posts}>
        <Post name={authorChange} post={change} />
        <Post name={authorChange} post={change} />
      </ul>
    </>
  );
}

export default PostsList;
