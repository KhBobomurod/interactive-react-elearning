// src/store.js
import { createStore } from "redux";

// localStorage’dan boshlang‘ich holatni o‘qish
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("completedLessons");
    if (serializedState === null) {
      return { completedLessons: {} };
    }
    return { completedLessons: JSON.parse(serializedState) };
  } catch (err) {
    return { completedLessons: {} };
  }
};

// localStorage’ga saqlash
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.completedLessons);
    localStorage.setItem("completedLessons", serializedState);
  } catch (err) {
    console.error("localStorage’ga saqlashda xato:", err);
  }
};

const initialState = loadState();

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "COMPLETE_LESSON":
      const newStateComplete = {
        ...state,
        completedLessons: {
          ...state.completedLessons,
          [action.payload]: true,
        },
      };
      saveState(newStateComplete); // Har o‘zgarishda saqlash
      return newStateComplete;
    case "MARK_INCOMPLETE":
      const newStateIncomplete = {
        ...state,
        completedLessons: {
          ...state.completedLessons,
          [action.payload]: false,
        },
      };
      saveState(newStateIncomplete); // Har o‘zgarishda saqlash
      return newStateIncomplete;
    default:
      return state;
  }
};

export const store = createStore(reducer);
