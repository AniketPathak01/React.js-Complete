import AddList from "./AddList";

const TodoItem = ({ todoItem }) => {
  return (
    <div className="items-container">
      {todoItem.map((item) => <AddList todoDate={item.dueDate} todoName={item.name}></AddList>)}
    </div>
  );
};
export default TodoItem;
