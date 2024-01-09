import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from "./message-slice";
import authReducer from "./auth-slice";

const store = configureStore({
    reducer: { messages: messagesReducer, auth: authReducer }
});

export default store;
