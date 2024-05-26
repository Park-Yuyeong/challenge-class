import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const saveStateToLocale = (state) =>
  localStorage.setItem("memo-app", JSON.stringify(state));

const initialState = {
  memos: JSON.parse(localStorage.getItem("memo-app")) ?? [
    {
      id: uuid(),
      content: "",
      time: new Date(),
      isSelected: true,
    },
  ],
};

export const memoSlice = createSlice({
  name: "memos",
  initialState,
  reducers: {
    createMemo: (state, action) => {
      const prevMemo = state.memos.map((memo) => {
        return { ...memo, isSelected: false };
      });

      saveStateToLocale([action.payload, ...prevMemo]);
      state.memos = [action.payload, ...prevMemo];
    },
    deleteMemo: (state) => {
      if (state.memos.length > 1) {
        const filteredMemo = state.memos.filter(
          (memo) => memo.isSelected !== true
        );

        const deletedMemo = filteredMemo.map((memo, idx) => {
          return idx === 0 ? { ...memo, isSelected: true } : memo;
        });

        saveStateToLocale(deletedMemo);
        state.memos = deletedMemo;
      } else {
        alert("하나 이상의 메모는 남겨두어야 합니다.");
      }
    },
    updateMemo: (state, action) => {
      saveStateToLocale(action.payload);
      state.memos = action.payload;
    },
    selectMemo: (state, action) => {
      const selectedMemo = state.memos.map((memo) => {
        if (memo.id === action.payload) return { ...memo, isSelected: true };
        else return { ...memo, isSelected: false };
      });

      saveStateToLocale(selectedMemo);
      state.memos = selectedMemo;
    },
  },
});

export const { createMemo, deleteMemo, updateMemo, selectMemo } =
  memoSlice.actions;
export default memoSlice.reducer;
