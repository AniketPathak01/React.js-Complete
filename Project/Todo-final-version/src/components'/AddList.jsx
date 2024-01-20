import { MdDelete } from "react-icons/md";

function AddList({ todoName, todoDate, onDeleteClick }) {
  return (
    <div classNameName="container">
      <div classNameName="row mt-3">
        <div classNameName="col-5">{todoName}</div>
        <div classNameName="col-5">{todoDate}</div>
        <div classNameName="col-2">
          <button
            type="button"
            classNameName="btn btn-danger kg-button"
            onClick={() => onDeleteClick(todoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddList;
