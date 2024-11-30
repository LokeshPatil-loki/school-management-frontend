import { ITEMS_PER_PAGE } from "@/lib/settings";
import { PaginationQueryParams } from "@/lib/types/PaginationQueryParams";
import { removeEmptyProperties } from "@/lib/utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface QueryParamsType extends PaginationQueryParams {
  search?: string | null;
  classId?: string | null;
}

export const announcementsApiSlice = createApi({
  reducerPath: "announcements",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/announcements",
    credentials: "include",
  }),
  endpoints: (builder) => {
    return {
      getAnnouncments: builder.query<any, QueryParamsType>({
        query: (query) => ({
          url: "/",
          params: removeEmptyProperties(query),
        }),
      }),
    };
  },
});

export const { useGetAnnouncmentsQuery } = announcementsApiSlice;
