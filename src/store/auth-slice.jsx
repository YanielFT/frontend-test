import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { getUserByNameAndPass } from "../lib/api";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const data = await getUserByNameAndPass({ username, password });
      // store user's token in local storage

      return data;
    } catch (error) {
      // return custom error message from API if any
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  loading: false,
  userInfo: null,
  error: null,
  success: false,
};
//rxslice
const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.loading = false;
      state.userInfo = null;
      state.error = null;
    },
    setCredentials: (state, { payload }) => {
      state.userInfo = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      userLogin.pending,
      (state) => {
        state.loading = true;
        state.error = null;
      },
      builder.addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload;
      }),
      builder.addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
    );
  },
});

const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;

export default authReducer;
