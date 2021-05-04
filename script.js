import { createStore } from "redux";

const initialState = {
  notes: []
};

const myReducer = (state = initialState, action) => {};

const store = createStore(myReducer);
