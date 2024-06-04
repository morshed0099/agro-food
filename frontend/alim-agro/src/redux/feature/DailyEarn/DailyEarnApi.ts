import baseApi from "../../api/baseApi";

const DailyEarnApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createDailyEarn: builder.mutation({
      query: (dailyEarnInfo) => ({
        url: "/dailyearn/create-earn",
        method: "POST",
        body: dailyEarnInfo,
      }),
    }),
  }),
});

export const { useCreateDailyEarnMutation } = DailyEarnApi;
