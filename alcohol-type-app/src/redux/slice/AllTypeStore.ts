import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ResultResponse } from "../../API/useGetAllType";

const AllTypeSlice = createSlice({
  name: "allType",
  initialState: [
    {
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
  ],
  reducers: {
    setAllType: (state: ResultResponse[], action: PayloadAction<ResultResponse[]>) => {
      // @todo
      console.log(state);
      return [...action.payload];
    },
  },
});

export const { setAllType } = AllTypeSlice.actions;

export const allTypeSliceReducer = AllTypeSlice.reducer;
