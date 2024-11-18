import { ITEMS_PER_PAGE } from "@/lib/settings";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const teachersApiSlice = createApi({
  reducerPath: "teachers",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api",
  }),
  endpoints: (builder) => {
    return {
      getTeachers: builder.query<any, { page: string; limit?: number }>({
        query: ({ page, limit = ITEMS_PER_PAGE }) => ({
          url: "/teachers",
          params: { page },
        }),
      }),
    };
  },
});

export const { useGetTeachersQuery } = teachersApiSlice;
