import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";

import StorageReducer from "./root-reducer";

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null)
      return {
        profileData: [],
        repoData: [],
      };
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return {
      profileData: [],
      repoData: [],
    };
  }
}

const persistedState = loadFromLocalStorage();

const store = createStore(
  StorageReducer,
  persistedState,
  applyMiddleware(logger)
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
