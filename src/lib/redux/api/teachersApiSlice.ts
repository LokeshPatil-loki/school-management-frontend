import { ITEMS_PER_PAGE } from "@/lib/settings";
import { removeEmptyProperties } from "@/lib/utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const teachersApiSlice = createApi({
  reducerPath: "teachers",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/teachers",
  }),
  endpoints: (builder) => {
    return {
      getTeachers: builder.query<
        any,
        {
          page: string;
          limit?: string | null;
          classId?: string | null;
          search?: string | null;
        }
      >({
        query: ({ page, limit = ITEMS_PER_PAGE, classId, search }) => ({
          url: "/",
          params: removeEmptyProperties({ page, limit, classId, search }),
        }),
      }),
    };
  },
});

export const { useGetTeachersQuery } = teachersApiSlice;
