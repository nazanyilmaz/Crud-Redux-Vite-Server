import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { ActionTypes } from "../redux/actionTypes/actionTypes";

const TodoCard = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch(); //dispatch kullanmak icin kurduk

  const toggleIsDone = () => {
    const updated = { ...todo, is_done: !todo.is_done };

    dispatch({
      type: ActionTypes.UPDATE,
      payload: updated,
    });
  };

  return (
    <div className="border shadow shadow-lg p-4 my-5">
      <h5>{todo.text}</h5>
      <small>{todo.is_done ? "Done" : "Not Done"}</small>
      <p>{todo.create_at}</p>
      <button onClick={() => setIsOpen(!isOpen)} className="btn btn-primary">
        Update
      </button>
      <button onClick={toggleIsDone} className="btn btn-success mx-3">
        {todo.is_done ? "Not Done" : "Done"}
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ActionTypes.DELETE,
            payload: todo.id,
          })
        }
        className="btn btn-danger"
      >
        Delete
      </button>

      {isOpen && <Modal close={() => setIsOpen(false)} todo={todo} />}
    </div>
  );
};

export default TodoCard;
