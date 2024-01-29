import styles from "./WelcomeMessege.module.css";
const WelcomeMessage = ({ onGetPostClick }) => {
  return (
    <center>
      <p className={styles.welcome}>
        Oops! Looks like there are no posts on this page! Please Add Posts.
      </p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={onGetPostClick}
      >
        Get Posts from server
      </button>
    </center>
  );
};
export default WelcomeMessage;
