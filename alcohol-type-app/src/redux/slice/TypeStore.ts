import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ResultResponse } from "../../API/useGetAllType";

export interface TypeState {
  myType: ResultResponse;
  displayType: ResultResponse;
}

const typeSlice = createSlice({
  name: "type",
  initialState: {
    myType: {
      typeInitial: "",
      typeName: "",
      introduction: "",
      title1: "",
      description1: "",
      title2: "",
      description2: "",
      title3: "",
      description3: "",
    },
    displayType: {
      typeInitial: "",
      typeName: "",
      introduction: "",
      title1: "",
      description1: "",
      title2: "",
      description2: "",
      title3: "",
      description3: "",
    },
  },
  reducers: {
    setMyType: (state: TypeState, action: PayloadAction<ResultResponse>) => {
      return { ...state, ...{ myType: action.payload } };
    },
    setDisplayType: (state: TypeState, action: PayloadAction<ResultResponse>) => {
      return { ...state, ...{ displayType: action.payload } };
    },
  },
});

export const { setMyType, setDisplayType } = typeSlice.actions;

export const typeSliceReducer = typeSlice.reducer;
