import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../app/store";

const initialStateValue = {
  response_data: "",
};

export const authSlice = createSlice({
  name: "auth_token",
  initialState: initialStateValue,
  reducers: {
    tokenData: (state, action) => {
      state.response_data = action.payload;
    },
  },
});

export const { tokenData } = authSlice.actions;

export default authSlice.reducer;

export function getToken() {
  return async () => {
    dispatch(authSlice.actions.tokenData);
  };
}
