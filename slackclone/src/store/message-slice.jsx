import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [], amount: 5
};

const messagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        replaceMessages(state, action) {
            // state.amount = action.payload.amount;
            state.items = action.payload.items;
        },
        addMessage(state, { payload }) {

            state.amount++;
            let messageNew = payload;
            const index = messageNew.hour.indexOf('-');

            messageNew = {
                ...messageNew,
                id: messageNew.fullName + messageNew.hour,
                hour: messageNew.hour.slice(0, index)
            }
            state.items.push(messageNew);
        },
        removeItem(state, action) {
            state.amount--;
            state.changed = true;
            const messageExist = state.items.findIndex(
                (item) => item.id === action.payload
            );
            const cartItem = state.items[messageExist];
            if (cartItem) {
                state.items = state.items.filter(
                    (item) => item.id !== action.payload
                );
            }
        },
    },
});

const messagesReducer = messagesSlice.reducer;
export const messagesActions = messagesSlice.actions;
export default messagesReducer;

