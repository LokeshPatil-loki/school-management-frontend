import { ITEMS_PER_PAGE } from "@/lib/settings";
import { PaginationQueryParams } from "@/lib/types/PaginationQueryParams";
import { removeEmptyProperties } from "@/lib/utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface GetResultsQueryParamsType extends PaginationQueryParams {
  search?: string | null;
  studentId?: string | null;
}

export const resultsApiSlice = createApi({
  reducerPath: "results",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/results",
  }),
  endpoints: (builder) => {
    return {
      getResults: builder.query<any, GetResultsQueryParamsType>({
        query: (query) => ({
          url: "/",
          params: removeEmptyProperties(query),
        }),
      }),
    };
  },
});

export const { useGetResultsQuery } = resultsApiSlice;
