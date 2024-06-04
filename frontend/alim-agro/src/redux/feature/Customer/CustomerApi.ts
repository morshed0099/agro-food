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
    createDebit: builder.mutation({
      query: (debitInfo) => ({
        url: "/custkhotian/create-debit",
        method: "POST",
        body: debitInfo,
      }),
    }),
    createCreadit: builder.mutation({
      query: (creaditInfo) => ({
        url: "/custkhotian/create-credit",
        method: "POST",
        body: creaditInfo,
      }),
    }),
  }),
});

export const {
  useCreateCustomerMutation,
  useGetSingleCustomerMutation,
  useCreateDebitMutation,
  useCreateCreaditMutation
} = customerApi;
