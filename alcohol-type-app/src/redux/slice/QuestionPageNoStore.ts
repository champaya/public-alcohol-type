import { createSlice } from "@reduxjs/toolkit";

const QuestionPageNoSlice = createSlice({
  name: "allType",
  initialState: 1,
  reducers: {
    incrementPageNo: (state: number) => {
      return (state += 1);
    },
    decrementPageNo: (state: number) => {
      return (state -= 1);
    },
    initPageNo: () => {
      return 1;
    },
  },
});

export const { incrementPageNo, decrementPageNo, initPageNo } = QuestionPageNoSlice.actions;

export const questionPageNoSliceReducer = QuestionPageNoSlice.reducer;
