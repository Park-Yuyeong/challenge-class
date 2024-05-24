import { configureStore } from "@reduxjs/toolkit";
import memoSlice from "./slices/memo.slice";

const store = configureStore({
  reducer: {
    memoSlice,
  },
});

export default store;
