import { ITEMS_PER_PAGE } from "@/lib/settings";
import { PaginationQueryParams } from "@/lib/types/PaginationQueryParams";
import { removeEmptyProperties } from "@/lib/utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface GetParentsQueryParamsType extends PaginationQueryParams {
  search?: string | null;
}

export const parentsApiSlice = createApi({
  reducerPath: "parents",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/parents",
  }),
  endpoints: (builder) => {
    return {
      getParents: builder.query<any, GetParentsQueryParamsType>({
        query: (query) => ({
          url: "/",
          params: removeEmptyProperties(query),
        }),
      }),
    };
  },
});

export const { useGetParentsQuery } = parentsApiSlice;
