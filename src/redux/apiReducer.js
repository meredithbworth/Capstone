import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define an API using createApi
export const api = createApi({
  // Unique string used in constructing Redux action types, state selectors, and React hook names
  reducerPath: "api",
  // Define a base query function that all endpoints will use as the base of their request
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/",
    // The base URL for all requests
    
  }),
  // Define endpoints for our API service
  endpoints: (builder) => ({
    // Define an endpoint that fetches players
    firstStop: builder.query({
        query: () => ({
            url: "products"
        })
      })
  }),
});
