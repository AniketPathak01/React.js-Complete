import Item from "./IndivudalItme";
let ListItems = ({ item }) => {
  return (
    <>
      <ul className="list-group">
        {item.map((item) => (
          <Item key={item} foodItem={item}></Item>
        ))}
      </ul>
    </>
  );
};
export default ListItems;
