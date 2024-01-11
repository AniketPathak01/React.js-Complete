function AddList({todoName, todoDate}) {
  return (
    <div class="container">
      <div class="row mt-3">
        <div class="col-5">{todoName}</div>
        <div class="col-5">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddList;
