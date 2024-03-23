import { configureStore } from "@reduxjs/toolkit";
import { typeSliceReducer } from "../slice/TypeStore";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { questionSliceReducer } from "../slice/QuestionStore";
import { allTypeSliceReducer } from "../slice/AllTypeStore";
import { questionPageNoSliceReducer } from "../slice/QuestionPageNoStore";
import { loadingReducer } from "../slice/LoadingStore";
import { errorReducer } from "../slice/ErrorStore";

const store = configureStore({
  reducer: {
    type: typeSliceReducer,
    question: questionSliceReducer,
    allType: allTypeSliceReducer,
    questionPageNo: questionPageNoSliceReducer,
    loading: loadingReducer,
    error: errorReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const wrappedUseSelector: TypedUseSelectorHook<RootState> = useSelector;
