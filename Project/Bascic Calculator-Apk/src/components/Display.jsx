import styles from "./Display.module.css"
const Display = ({displayValue}) =>{

    return(
        <input type="text" className={styles.input} value={displayValue} readOnly />
    );
}

export default Display