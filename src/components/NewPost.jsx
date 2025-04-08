import classes from "./NewPost.module.css";
import { useState } from "react";

function NewPost({ onCancel, onAddPost }) {
  const [change, setChange] = useState("");
  const [authorChange, setAuthorChange] = useState("");

  function bodyChangeHandler(event) {
    setChange(event.target.value);
  }

  function authorChangeHandler(event) {
    setAuthorChange(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: change,
      author: authorChange,
    };
    onAddPost(postData);
    onCancel();
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
