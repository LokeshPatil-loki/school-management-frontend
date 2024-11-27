import { ITEMS_PER_PAGE } from "@/lib/settings";
import { PaginationQueryParams } from "@/lib/types/PaginationQueryParams";
import { removeEmptyProperties } from "@/lib/utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface GetAssginmentsQueryParamsType extends PaginationQueryParams {
  teacherId?: string | null;
  search?: string | null;
  classId?: string | null;
}

export const assignmentsApiSlice = createApi({
  reducerPath: "assignments",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/assignments",
  }),
  endpoints: (builder) => {
    return {
      getAssginments: builder.query<any, GetAssginmentsQueryParamsType>({
        query: (query) => ({
          url: "/",
          params: removeEmptyProperties(query),
        }),
      }),
    };
  },
});

export const { useGetAssginmentsQuery } = assignmentsApiSlice;
