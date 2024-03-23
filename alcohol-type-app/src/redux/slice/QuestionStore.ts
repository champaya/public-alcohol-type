import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface QuestionState {
  questionSets: QuestionSet[];
}

export interface QuestionSet {
  id: string;
  question: string;
  value: string;
}

const questionSets = [
  { id: "1-1", question: "お酒をよく飲む。", value: "0" },
  { id: "1-2", question: "甘めのお酒が好きだ。", value: "0" },
  { id: "1-3", question: "人と飲むときは少人数が多い。", value: "0" },
  { id: "1-4", question: "たいてい何を飲むか決まっている。", value: "0" },
  { id: "2-1", question: "お酒は割らずに飲むことが多い。", value: "0" },
  { id: "2-2", question: "ウイスキーや焼酎が苦手だ。", value: "0" },
  { id: "2-3", question: "一人で飲むことがある。", value: "0" },
  { id: "2-4", question: "珍しいお酒を飲むには勇気が必要だ。。", value: "0" },
  { id: "3-1", question: "ほとんど二日酔いになったことがない。", value: "0" },
  { id: "3-2", question: "ジュースみたいなお酒が好きだ。", value: "0" },
  { id: "3-3", question: "酔うためではなく味を楽しんでいる。", value: "0" },
  { id: "3-4", question: "何事もメジャーなものが好きだ。", value: "0" },
  { id: "4-1", question: "度数が高くても美味しいと感じられる。", value: "0" },
  { id: "4-2", question: "大人の味覚を持っている。", value: "0" },
  { id: "4-3", question: "ちびちび飲むことが好きだ。", value: "0" },
  { id: "4-4", question: "あまり挑戦はしないほうだ。", value: "0" },
];

const questionSlice = createSlice({
  name: "type",
  initialState: { questionSets },
  reducers: {
    changeQuestionValue: (state: QuestionState, action: PayloadAction<QuestionSet>) => {
      const newState = [...state.questionSets];
      const newArray = newState.filter((item) => item.id !== action.payload.id);
      const nextArray = [...newArray, action.payload];
      const returnArray = nextArray.sort((a, b) => {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }

        return 0;
      });

      return { questionSets: returnArray };
    },
    initQuestionSets: () => {
      return { questionSets };
    },
  },
});

export const { changeQuestionValue, initQuestionSets } = questionSlice.actions;

export const questionSliceReducer = questionSlice.reducer;
