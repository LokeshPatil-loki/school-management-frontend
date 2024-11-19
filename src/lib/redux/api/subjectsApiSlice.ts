import { ENV_CONFIG } from "@/lib/config";
import { removeEmptyProperties } from "@/lib/utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type GetSubjectsQueryParamsType = {
  page?: string | null;
  limit?: string | null;
  teacherId?: string | null;
  search?: string | null;
};

export const subjectsApiSlice = createApi({
  reducerPath: "subjects",
  baseQuery: fetchBaseQuery({
    baseUrl: `${ENV_CONFIG.BACKEND_URL}/subjects`,
  }),
  endpoints: (builder) => {
    return {
      getSubjects: builder.query<any, GetSubjectsQueryParamsType>({
        query: (query) => {
          return {
            url: "/",
            params: removeEmptyProperties(query),
          };
        },
      }),
    };
  },
});

export const { useGetSubjectsQuery } = subjectsApiSlice;
