import styles from "./Foodinput.module.css";
const FoodInput = ({ handelKeyDown }) => {
  return (
    <input
      classNameName={styles.input}
      type="text"
      placeholder="Enter Food Item here"
      onKeyDown={handelKeyDown}
    />
  );
};
export default FoodInput;
