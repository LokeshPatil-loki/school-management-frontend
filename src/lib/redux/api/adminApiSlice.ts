import { ITEMS_PER_PAGE } from "@/lib/settings";
import { PaginationQueryParams } from "@/lib/types/PaginationQueryParams";
import { removeEmptyProperties } from "@/lib/utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApiSlice = createApi({
  reducerPath: "admin",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/admin",
    credentials: "include",
  }),
  endpoints: (builder) => {
    return {
      count: builder.query<any, any>({
        query: (query) => ({
          url: "/count",
        }),
      }),
    };
  },
});

export const { useCountQuery } = adminApiSlice;
