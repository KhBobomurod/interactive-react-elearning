// src/store.js
import { createStore } from "redux";

// localStorage’dan boshlang‘ich holatni o‘qish
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return {
        completedLessons: {},
        user: { name: "Foydalanuvchi" }, // Standart foydalanuvchi ismi
      };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("localStorage’dan o‘qishda xato:", err);
    return {
      completedLessons: {},
      user: { name: "Foydalanuvchi" },
    };
  }
};

// localStorage’ga saqlash
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.error("localStorage’ga saqlashda xato:", err);
  }
};

// Boshlang‘ich holat
const initialState = loadState();

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "COMPLETE_LESSON":
      return {
        ...state,
        completedLessons: {
          ...state.completedLessons,
          [action.payload]: true,
        },
      };
    case "MARK_INCOMPLETE":
      return {
        ...state,
        completedLessons: {
          ...state.completedLessons,
          [action.payload]: false,
        },
      };
    case "SET_USER":
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload.name,
        },
      };
    default:
      return state;
  }
};

// Store yaratish
export const store = createStore(reducer);

// Store o‘zgarishlarini kuzatib, localStorage’ga saqlash
store.subscribe(() => {
  saveState(store.getState());
});
