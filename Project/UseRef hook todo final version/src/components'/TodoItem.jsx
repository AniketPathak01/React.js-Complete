import AddList from "./AddList";

const TodoItem = ({ todoItem, onDeleteClick }) => {
  return (
    <div className="items-container" id="content">
      {todoItem.map((item) => (
        <AddList
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        ></AddList>
      ))}
    </div>
  );
};
export default TodoItem;
