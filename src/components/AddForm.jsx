import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { ActionTypes } from "../redux/actionTypes/actionTypes";

import axios from "axios";

const AddForm = () => {
  const dispatch = useDispatch(); //Dispatch aktiflestirir

  const handleSubmit = (e) => {
    e.preventDefault(); // sayfa yenilemesini engelle

    const newTodo = {
      //store gidecek yeni veriyi hazirla
      id: v4(),
      text: e.target[0].value,
      is_done: false,
      create_at: new Date().toLocaleDateString(),
    };

    //veriyi api ya da eklemek gondermek
    axios.post("/todos", newTodo).then(() =>
      dispatch({
        // reducera aksiyonun iletilmesi
        type: ActionTypes.ADD,
        payload: newTodo,
      })
    );

    e.target.reset(); //formu temizleme
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 my-5">
      <input
        className="form-control"
        placeholder="Exp: Learn to Redux"
        type="text"
      />

      <button className="btn btn-warning">ADD</button>
    </form>
  );
};

export default AddForm;
