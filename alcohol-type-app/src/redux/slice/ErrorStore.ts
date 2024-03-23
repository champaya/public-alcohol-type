import { createSlice } from "@reduxjs/toolkit";

const ErrorStore = createSlice({
  name: "error",
  initialState: false,
  reducers: {
    setIsError: () => {
      return true;
    },
  },
});

export const { setIsError } = ErrorStore.actions;

export const errorReducer = ErrorStore.reducer;
