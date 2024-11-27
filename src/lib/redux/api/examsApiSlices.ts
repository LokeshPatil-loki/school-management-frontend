import { ITEMS_PER_PAGE } from "@/lib/settings";
import { PaginationQueryParams } from "@/lib/types/PaginationQueryParams";
import { removeEmptyProperties } from "@/lib/utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface GetExamsQueryParamsType extends PaginationQueryParams {
  teacherId?: string | null;
  search?: string | null;
  classId?: string | null;
}

export const examsApiSlice = createApi({
  reducerPath: "exams",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/exam",
  }),
  endpoints: (builder) => {
    return {
      getExams: builder.query<any, GetExamsQueryParamsType>({
        query: (query) => ({
          url: "/",
          params: removeEmptyProperties(query),
        }),
      }),
    };
  },
});

export const { useGetExamsQuery } = examsApiSlice;
