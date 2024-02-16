import ListTodo from "./components/ListTodo";
import AddForm from "./components/AddForm";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ActionTypes } from "./redux/actionTypes/actionTypes";

axios.defaults.baseURL = "http://localhost:3040";

const App = () => {
  const dispatch = useDispatch();
  //apiden todo verilerini store aktarma
  useEffect(() => {
    axios.get("/todos").then((res) =>
      dispatch({
        type: ActionTypes.SET,
        payload: res.data,
      })
    );
  }, []);

  return (
    <div className="vh-100">
      <div className="container p-5">
        <h2 className="text-center fw-bold">
          REDUX <span className="text-warning">CRUD</span>
        </h2>
        <AddForm />
        <ListTodo />
      </div>
    </div>
  );
};

export default App;
