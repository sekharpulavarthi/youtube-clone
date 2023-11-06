import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_CHAT_API_LIMIT } from "../../constants/APIConstants";

const chatSlice = createSlice({
  name: "chat",
  initialState: { messages: [] },

  reducers: {
    addMessage: (state, action) => {
      // state.messages.slice(OFFSET_CHAT_API_LIMIT, 1);
      state.messages.push(action.payload);
      state.messages.length > OFFSET_CHAT_API_LIMIT && state.messages.shift();
    },
  },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;
