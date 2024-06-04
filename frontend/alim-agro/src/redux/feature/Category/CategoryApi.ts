import baseApi from "../../api/baseApi";

const CategoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategory: builder.query({
      query: () => ({
        url: "/ricecategory",
        method: "GET",
      }),
    }),
    createCate: builder.mutation({
      query: (categoryInfo) => ({
        url: "/ricecategory/create-category",
        method: "POST",
        body: categoryInfo,
      }),
    }),
  }),
});

export const { useGetAllCategoryQuery, useCreateCateMutation } = CategoryApi;
