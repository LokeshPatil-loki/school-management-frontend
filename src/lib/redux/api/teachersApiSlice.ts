import { ITEMS_PER_PAGE } from "@/lib/settings";
import { PaginationQueryParams } from "@/lib/types/PaginationQueryParams";
import { removeEmptyProperties } from "@/lib/utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface GetTeachrsQueryParamsType extends PaginationQueryParams {
  teacherId?: string | null;
  search?: string | null;
  classId?: string | null;
}

export const teachersApiSlice = createApi({
  reducerPath: "teachers",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/teachers",
    credentials: "include",
  }),
  endpoints: (builder) => {
    return {
      getTeachers: builder.query<any, GetTeachrsQueryParamsType>({
        query: (query) => ({
          url: "/",
          params: removeEmptyProperties(query),
        }),
      }),
      count: builder.query<any, any>({
        query: (query) => ({
          url: "/count",
        }),
      }),
    };
  },
});

export const { useGetTeachersQuery, useCountQuery } = teachersApiSlice;
