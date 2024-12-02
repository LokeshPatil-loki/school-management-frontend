import { configureStore } from "@reduxjs/toolkit";
import { teachersApiSlice } from "./api/teachersApiSlice";
import { studentsApiSlice } from "./api/studentsApiSlice";
import { parentsApiSlice } from "./api/parentsApiSlice";
import { subjectsApiSlice } from "./api/subjectsApiSlice";
import { classesApiSlice } from "./api/classesApiSlices";
import { lessonsApiSlice } from "./api/lessonsApiSlice";
import { examsApiSlice } from "./api/examsApiSlices";
import { assignmentsApiSlice } from "./api/assignmentsApiSlices";
import { resultsApiSlice } from "./api/resultsApiSlices";
import { eventsApiSlice } from "./api/eventsApiSlice";
import { announcementsApiSlice } from "./api/announcmentsApiSlice";
import { adminApiSlice } from "./api/adminApiSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [teachersApiSlice.reducerPath]: teachersApiSlice.reducer,
      [studentsApiSlice.reducerPath]: studentsApiSlice.reducer,
      [parentsApiSlice.reducerPath]: parentsApiSlice.reducer,
      [subjectsApiSlice.reducerPath]: subjectsApiSlice.reducer,
      [classesApiSlice.reducerPath]: classesApiSlice.reducer,
      [lessonsApiSlice.reducerPath]: lessonsApiSlice.reducer,
      [examsApiSlice.reducerPath]: examsApiSlice.reducer,
      [assignmentsApiSlice.reducerPath]: assignmentsApiSlice.reducer,
      [resultsApiSlice.reducerPath]: resultsApiSlice.reducer,
      [eventsApiSlice.reducerPath]: eventsApiSlice.reducer,
      [announcementsApiSlice.reducerPath]: announcementsApiSlice.reducer,
      [adminApiSlice.reducerPath]: adminApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware()
        .concat(teachersApiSlice.middleware)
        .concat(studentsApiSlice.middleware)
        .concat(parentsApiSlice.middleware)
        .concat(subjectsApiSlice.middleware)
        .concat(classesApiSlice.middleware)
        .concat(examsApiSlice.middleware)
        .concat(assignmentsApiSlice.middleware)
        .concat(resultsApiSlice.middleware)
        .concat(eventsApiSlice.middleware)
        .concat(announcementsApiSlice.middleware)
        .concat(adminApiSlice.middleware)
        .concat(lessonsApiSlice.middleware);
    },
  });
};

// Infer type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
