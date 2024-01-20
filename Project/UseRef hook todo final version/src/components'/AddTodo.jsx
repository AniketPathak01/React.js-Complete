import { useRef } from "react";
import { IoMdAddCircle } from "react-icons/io";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;

    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    onNewItem(todoName, dueDate);
  };
  return (
    <div classNameName="container mt-5">
      <form classNameName="row" onSubmit={handleAddButtonClicked}>
        <div classNameName="col-5">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Tode here"
          />
        </div>
        <div classNameName="col-5">
          <input type="date" ref={dueDateElement} />
        </div>
        <div classNameName="col-2">
          <button type="submit" classNameName="btn btn-success kg-button">
            <IoMdAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
