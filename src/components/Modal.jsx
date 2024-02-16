import { useDispatch } from "react-redux";
import { ActionTypes } from "../redux/actionTypes/actionTypes";

import axios from "axios";

const Modal = ({ close, todo }) => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    //inputtadki ismi allaim
    const text = e.target[1].value;

    //todo titleini degistir
    const updated = { ...todo, text: text };

    //storu guncelle
    dispatch({ type: ActionTypes.UPDATE, payload: updated });
    //modali kapama
    close();
  };

  return (
    <div className="modal d-block bg-black bg-opacity-50 text-dark">
      <div className="modal-dialog modal-dialog-centered">
        <form onSubmit={handleSubmit} className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">Update to TODO</h1>
            <button onClick={close} type="button" class="btn-close"></button>
          </div>
          <div className="modal-body">
            <label>New Title</label>
            <input
              defaultValue={todo.text}
              className="form-control shadow mt-2 "
              type="text"
            />
          </div>
          <div className="modal-footer">
            <button onClick={close} type="button" className="btn btn-secondary">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
