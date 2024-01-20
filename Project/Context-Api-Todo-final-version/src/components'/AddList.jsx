import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { TodoItemContext } from "../store/todo-item-store";

function AddList({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemContext);
  return (
    <div classNameName="container">
      <div classNameName="row mt-3">
        <div classNameName="col-5">{todoName}</div>
        <div classNameName="col-5">{todoDate}</div>
        <div classNameName="col-2">
          <button
            type="button"
            classNameName="btn btn-danger kg-button"
            onClick={() => deleteItem(todoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddList;
