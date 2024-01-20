function AddList({ todoName, todoDate }) {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-5">{todoName}</div>
        <div className="col-5">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddList;
