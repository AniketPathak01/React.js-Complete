import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { TodoItemContext } from "../store/todo-item-store";

function AddList({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemContext);
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-5">{todoName}</div>
        <div className="col-5">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
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
