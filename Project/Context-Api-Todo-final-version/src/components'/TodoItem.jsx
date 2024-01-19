import { useContext } from "react";
import AddList from "./AddList";
import { TodoItemContext } from "../store/todo-item-store";

const TodoItem = () => {
  const { todoItem } = useContext(TodoItemContext);
  return (
    <div className="items-container" id="content">
      {todoItem.map((item) => (
        <AddList
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
        ></AddList>
      ))}
    </div>
  );
};
export default TodoItem;
