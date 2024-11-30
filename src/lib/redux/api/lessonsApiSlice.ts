import { ITEMS_PER_PAGE } from "@/lib/settings";
import { PaginationQueryParams } from "@/lib/types/PaginationQueryParams";
import { removeEmptyProperties } from "@/lib/utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface GetLessonsQueryParamsType extends PaginationQueryParams {
  teacherId?: string | null;
  search?: string | null;
  classId?: string | null;
}

export const lessonsApiSlice = createApi({
  reducerPath: "lessons",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/lessons",
    credentials: "include",
  }),
  endpoints: (builder) => {
    return {
      getLessons: builder.query<any, GetLessonsQueryParamsType>({
        query: (query) => ({
          url: "/",
          params: removeEmptyProperties(query),
        }),
      }),
    };
  },
});

export const { useGetLessonsQuery } = lessonsApiSlice;
