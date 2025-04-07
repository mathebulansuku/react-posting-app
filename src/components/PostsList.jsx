import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";
import Modal from "./Modal";

function PostsList({ isPosting, onStopPosting }) {
  return (
    <>
      {isPosting ? (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} />
        </Modal>
      ) : null}
      <ul className={classes.posts}>
        <Post name="Nsuku" post="This is getting confusing" />
      </ul>
    </>
  );
}

export default PostsList;
