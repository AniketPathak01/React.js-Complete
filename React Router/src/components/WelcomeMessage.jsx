import styles from "./WelcomeMessege.module.css";
const WelcomeMessage = () => {
  return (
    <center>
      <p className={styles.welcome}>
        Oops! Looks like there are no posts on this page! Please Add Posts.
      </p>
    </center>
  );
};
export default WelcomeMessage;
