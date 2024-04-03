import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAdmin: null,
  error: null,
  loading: false,
  loading_logout: false
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.currentAdmin = action.payload;
      state.loading = false;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    logoutStart: (state) => {
      state.loading_logout = true;
    },
    logoutSuccess: (state) => {
      state.currentAdmin = null;
      state.loading_logout = false;
      state.error = null;
    },
    logoutFailure: (state, action) => {
      state.error = action.payload;
      state.loading_logout = false;
    }
  }
})

export const {
  loginStart, loginSuccess, loginFailure, 
  logoutStart, logoutSuccess, logoutFailure
} = adminSlice.actions;
export default adminSlice.reducer;