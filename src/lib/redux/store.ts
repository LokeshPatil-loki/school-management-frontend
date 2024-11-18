import { configureStore } from "@reduxjs/toolkit";
import { teachersApiSlice } from "./api/teachersApiSlice";
import { studentsApiSlice } from "./api/studentsApiSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [teachersApiSlice.reducerPath]: teachersApiSlice.reducer,
      [studentsApiSlice.reducerPath]: studentsApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware()
        .concat(teachersApiSlice.middleware)
        .concat(studentsApiSlice.middleware);
    },
  });
};

// Infer type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
