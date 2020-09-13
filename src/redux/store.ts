import thunk from "redux-thunk";
import logger from "redux-logger";

import MainReducer from "./reducers";

import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, MainReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
// export const store = createStore(MainReducer, applyMiddleware(thunk));
