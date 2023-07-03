import { createSlice } from "@reduxjs/toolkit";
import { createUser } from "./userActions";

const userSlice = createSlice({
    name: 'usuarios',
    initialState: {
      creacionEnProgreso: false,
      error: null,
    },
    reducers: {
        getUserData: (state) => {
            
        }
    },
    extraReducers: (builder) => {
      builder
        .addCase(createUser.pending, (state) => {
          state.creacionEnProgreso = true;
          state.error = null;
        })
        .addCase(createUser.fulfilled, (state) => {
          state.creacionEnProgreso = false;
          state.error = null;
        })
        .addCase(createUser.rejected, (state, action) => {
          state.creacionEnProgreso = false;
          state.error = action.payload;
        });
    },
  });
  
  export default userSlice.reducer;