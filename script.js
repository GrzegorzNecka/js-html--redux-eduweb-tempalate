// import { createStore } from "redux";

const { createStore } = Reducer;

const initialState = {
  notes: []
};
console.log("sss");
const myReducer = (state = initialState, action) => {
  console.log(action);
};

const noteAction = {
  type: "ADD_NOTE",
  payload: { title: "Hello", content: "lorem" }
};

const store = createStore(myReducer);

store.dispatch();

/**
 *
 * type - nazwa akcji
 * paylod - zawartośc akcji
 * dispatch() - służy do wysyłania akcji do reducera
 *
 */
