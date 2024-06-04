import baseApi from "../../api/baseApi";

const UserApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (userInfo) => ({
        url: "/user",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useCreateUserMutation } = UserApi;
