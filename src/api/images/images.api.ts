import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ImageResource } from "./image.resource";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://agencyanalytics-api.vercel.app/",
  }),
  tagTypes: ["Images"],
  endpoints: (builder) => ({
    getImages: builder.query<ImageResource[], string>({
      query: () => "/images.json",
      providesTags: ["Images"],
      transformResponse: (response: ImageResource[]) => {
        return response;
      },
    }),
  }),
});

export const { useGetImagesQuery } = apiSlice;
