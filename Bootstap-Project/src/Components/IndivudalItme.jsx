import styles from "./Indivual.module.css";

let Item = ({ foodItem }) => {
  const handleBuyButtonClick = (event) => {
    console.log(event);
    console.log(`${foodItem} being bought`);
  };
  return (
    <li className="list-group-item">
      <span>{foodItem}</span>
      <button className={styles.button} onClick={(event) => handleBuyButtonClick(event)}>
        Buy
      </button>
    </li>
  );
};
export default Item;
