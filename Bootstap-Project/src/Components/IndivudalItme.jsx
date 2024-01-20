import styles from "./Indivual.module.css";

let Item = ({ foodItem, handleBuyButton }) => {
  return (
    <li classNameName="list-group-item">
      <span>{foodItem}</span>
      <button classNameName={styles.button} onClick={handleBuyButton}>
        Buy
      </button>
    </li>
  );
};
export default Item;
