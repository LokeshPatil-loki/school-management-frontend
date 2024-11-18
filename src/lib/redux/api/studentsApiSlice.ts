import { ITEMS_PER_PAGE } from "@/lib/settings";
import { removeEmptyProperties } from "@/lib/utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentsApiSlice = createApi({
  reducerPath: "students",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/students",
  }),
  endpoints: (builder) => {
    return {
      getStudents: builder.query<
        any,
        {
          page?: string;
          limit?: string;
          teacherId?: string | null;
          search: string | null;
        }
      >({
        query: ({ teacherId, search, page, limit = ITEMS_PER_PAGE }) => ({
          url: "/",
          params: removeEmptyProperties({ teacherId, search, page, limit }),
        }),
      }),
    };
  },
});

export const { useGetStudentsQuery } = studentsApiSlice;
