import baseApi from "../../api/baseApi";

const RiceStockApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createRiceAdd: builder.mutation({
      query: (riceInfe) => ({
        url: "/ricestock/create-rice-stock",
        method: "POST",
        body: riceInfe,
      }),
    }),
  }),
});

export const { useCreateRiceAddMutation } = RiceStockApi;
