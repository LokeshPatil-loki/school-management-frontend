import { ITEMS_PER_PAGE } from "@/lib/settings";
import { PaginationQueryParams } from "@/lib/types/PaginationQueryParams";
import { removeEmptyProperties } from "@/lib/utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface QueryParamsType extends PaginationQueryParams {
  search?: string | null;
  classId?: string | null;
}

export const eventsApiSlice = createApi({
  reducerPath: "events",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/events",
    credentials: "include",
  }),
  endpoints: (builder) => {
    return {
      getEvents: builder.query<any, QueryParamsType>({
        query: (query) => ({
          url: "/",
          params: removeEmptyProperties(query),
        }),
      }),
    };
  },
});

export const { useGetEventsQuery } = eventsApiSlice;
