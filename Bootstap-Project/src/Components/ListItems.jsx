import Item from "./IndivudalItme";
let ListItems = ({ item }) => {
  return (
    <>
      <ul classNameName="list-group">
        {item.map((item) => (
          <Item
            key={item}
            foodItem={item}
            handleBuyButton={() => console.log(`${item} bought`)}
          ></Item>
        ))}
      </ul>
    </>
  );
};
export default ListItems;
