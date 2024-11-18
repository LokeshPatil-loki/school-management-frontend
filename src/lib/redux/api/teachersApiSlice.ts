import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const teachersApiSlice = createApi({
  reducerPath: "teachers",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api",
  }),
  endpoints: (builder) => {
    return {
      getTeachers: builder.query({
        query: () => "/teachers",
      }),
    };
  },
});

export const { useGetTeachersQuery } = teachersApiSlice;
