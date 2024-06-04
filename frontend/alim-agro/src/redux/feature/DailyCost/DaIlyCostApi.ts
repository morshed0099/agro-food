import baseApi from "../../api/baseApi";

const DailyCostApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createDailyCost: builder.mutation({
      query: (dailyCost) => ({
        url: "/dailycost/create-cost",
        method: "POST",
        body: dailyCost,
      }),
    }),
  }),
});

export const { useCreateDailyCostMutation } = DailyCostApi;
