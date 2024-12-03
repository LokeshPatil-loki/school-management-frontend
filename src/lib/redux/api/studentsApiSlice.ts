import { ITEMS_PER_PAGE } from "@/lib/settings";
import { PaginationQueryParams } from "@/lib/types/PaginationQueryParams";
import { removeEmptyProperties } from "@/lib/utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "inspector";

interface GetStudentsQueryParamsType extends PaginationQueryParams {
  teacherId?: string | null;
  search?: string | null;
}

export const studentsApiSlice = createApi({
  reducerPath: "students",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/students",
    credentials: "include",
  }),
  endpoints: (builder) => {
    return {
      getStudents: builder.query<any, GetStudentsQueryParamsType>({
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
      studentCountBySex: builder.query({
        query: () => ({
          url: "/count-by-sex",
        }),
      }),
    };
  },
});

export const { useGetStudentsQuery, useCountQuery, useStudentCountBySexQuery } =
  studentsApiSlice;
