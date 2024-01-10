import styles from "./Indivual.module.css";

let Item = ({ foodItem, handleBuyButton }) => {
  return (
    <li className="list-group-item">
      <span>{foodItem}</span>
      <button className={styles.button} onClick={handleBuyButton}>
        Buy
      </button>
    </li>
  );
};
export default Item;
