import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: "counter",
  initialState: { num: 0 },
  reducers: {
    up: (state, action) => {
      state.num = state.num + action.payload;
    },
  },
});

export default counterStore;
