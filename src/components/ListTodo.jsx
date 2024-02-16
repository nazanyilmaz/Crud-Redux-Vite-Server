import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

const ListTodo = ({ todo }) => {
  //store'da verinin tutuldugu ilgili reduca abobe olmak
  const state = useSelector((store) => store.todoReducer); //stordaki todoreducera abone olduk

  return (
    <div>
      {state.todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default ListTodo;
