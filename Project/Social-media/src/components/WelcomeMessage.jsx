import { useContext } from "react";
import styles from "./WelcomeMessege.module.css";
import { PostListContext } from "../store/post-list-store";
const WelcomeMessage = () => {
  const contextObj = useContext(PostListContext);
  const postList = contextObj.postList;
  return (
    postList.length === 0 && (
      <p className={styles.welcome}>Oops! Looks like there are no posts on this page! Please Add Posts.</p>
    )
  );
};
export default WelcomeMessage;