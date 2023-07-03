import { createSlice } from "@reduxjs/toolkit";
import { sessionLogIn } from "./authActions";

const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

const initialState = {
  userInfo: userToken,
  accessToken: null,
  isLoggedIn: true,
  isLoading: false,
  error: {
    message: false,
  },
}

const authUserSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    closeSession: (state) => {
      state.isLoggedIn = false
      state.accessToken = null
      state.userInfo = null
      localStorage.removeItem('userToken')
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(sessionLogIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(sessionLogIn.fulfilled, (state, action) => {
        let accessToken = action.payload.token;
        state.accessToken = accessToken;
        state.loading = false;
        state.isLoggedIn = true;
        localStorage.setItem('userToken', accessToken)
      })
      .addCase(sessionLogIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const { closeSession } = authUserSlice.actions;

export default authUserSlice.reducer;

//  TODO: 
//    - Implementar servicio para manejar el token de autenticación