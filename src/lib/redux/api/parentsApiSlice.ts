import { ITEMS_PER_PAGE } from "@/lib/settings";
import { removeEmptyProperties } from "@/lib/utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const parentsApiSlice = createApi({
  reducerPath: "parents",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/parents",
  }),
  endpoints: (builder) => {
    return {
      getParents: builder.query<
        any,
        {
          page: string;
          limit?: string | null;
          search?: string | null;
        }
      >({
        query: ({ page, limit = ITEMS_PER_PAGE, search }) => ({
          url: "/",
          params: removeEmptyProperties({ page, limit, search }),
        }),
      }),
    };
  },
});

export const { useGetParentsQuery } = parentsApiSlice;
