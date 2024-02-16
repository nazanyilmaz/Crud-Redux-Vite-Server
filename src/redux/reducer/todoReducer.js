//state guncellenninceye dek redux un hata vermemesi icin initialstate tanimlamaliyiz.
import { ActionTypes } from "../actionTypes/actionTypes";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD:
      //yeni todoyu eskilerin arasina ekle
      const tempTodos = state.todos.concat(action.payload);

      return {
        // state guncellenmesi.
        todos: tempTodos,
      };

    case ActionTypes.DELETE:
      const filtred = state.todos.filter((todo) => todo.id !== action.payload);

      return { todos: filtred };

    case ActionTypes.UPDATE:
      const uptated = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      return { todos: uptated };

    case ActionTypes.SET:
      return { todos: action.payload };

    default:
      return state;
  }
};
export default todoReducer;
