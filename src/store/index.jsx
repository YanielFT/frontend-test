// import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from "./message-slice";
import authReducer from "./auth-slice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  messages: messagesReducer,
  auth: authReducer,
});

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
