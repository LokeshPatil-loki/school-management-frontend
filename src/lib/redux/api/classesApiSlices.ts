import { ITEMS_PER_PAGE } from "@/lib/settings";
import { PaginationQueryParams } from "@/lib/types/PaginationQueryParams";
import { removeEmptyProperties } from "@/lib/utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface GetClassesQueryParamsType extends PaginationQueryParams {
  search?: string | null;
  supervisor?: string | null;
}

export const classesApiSlice = createApi({
  reducerPath: "classes",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/classes",
  }),
  endpoints: (builder) => {
    return {
      getClasses: builder.query<any, GetClassesQueryParamsType>({
        query: (query) => ({
          url: "/",
          params: removeEmptyProperties(query),
        }),
      }),
    };
  },
});

export const { useGetClassesQuery } = classesApiSlice;
