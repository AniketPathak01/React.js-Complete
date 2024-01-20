import styles from "./Container.module.css";

const Container = (props) => {
  return <div classNameName={styles.container}>{props.children}</div>;
};
export default Container;
