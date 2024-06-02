import { createSlice } from "@reduxjs/toolkit";

export type Tuser = {
  user: null | object;
  token: null | string;
};

const initialState: Tuser = {
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logOut: (state) => {
      (state.token = null), (state.user = null);
    },
  },
});

export const { logOut, setUser } = authSlice.actions;

export default authSlice.reducer;
