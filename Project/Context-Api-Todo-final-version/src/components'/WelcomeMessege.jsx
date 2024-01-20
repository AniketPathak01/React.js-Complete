import { useContext } from "react";
import styles from "./WelcomeMessege.module.css";
import { TodoItemContext } from "../store/todo-item-store";
const WelcomeMessage = () => {
  const contextObj = useContext(TodoItemContext);
  const todoItem = contextObj.todoItem;
  return (
    todoItem.length === 0 && (
      <p classNameName={styles.welcome}>Enjoy Your Day!</p>
    )
  );
};
export default WelcomeMessage;
