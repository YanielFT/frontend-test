import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from "./message-slice";

const store = configureStore({
    reducer:{messages: messagesReducer}
});

export default store;
