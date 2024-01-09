import styles from "./Foodinput.module.css";
const FoodInput = () => {

    //Another way to write
    const handelOnchange = (event) =>{
        console.log(event.target.value)
    }
  return (
      <input
        className={styles.input}
        type="text"
        placeholder="Enter Food Item here"

        //onChange={(event) => console.log(event.target.value)}
        //Anoter way
        onChange={handelOnchange}
      />
  );
};
export default FoodInput;
