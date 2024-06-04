import baseApi from "../../api/baseApi";
const customerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCustomer: builder.mutation({
      query: (customerInfo) => ({
        url: "/customer/create-customer",
        method: "POST",
        body: customerInfo,
      }),
    }),
    getSingleCustomer: builder.mutation({
      query: (phoneNumber) => ({
        url: "/customer/phonenumber",
        method: "POST",
        body: phoneNumber,
      }),
    }),
  }),
});

export const { useCreateCustomerMutation, useGetSingleCustomerMutation } =
  customerApi;
