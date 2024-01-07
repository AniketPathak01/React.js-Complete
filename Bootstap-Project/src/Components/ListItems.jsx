
import Item from "./IndivudalItme";
const ListItems = (props) =>{

    return (
        <ul className="list-group">
            {props.items.map((items) =>(<Item key= {items} foodItem = {items}></Item>))}
        </ul>
    );
}

export default ListItems