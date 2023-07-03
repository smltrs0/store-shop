import { createSlice } from "@reduxjs/toolkit";
import { createUser } from "./userActions";
import { setUsetToken } from "../auth/authUserSlice";

const userSlice = createSlice({
	name: 'usuarios',
	initialState: {
		isLoading: false,
		error: false,
		userCreated: false,
		messageUser: false,
		messageErrorUser: false,
	},
	reducers: {
		clearMessagedata: (state) => {
			state.messageUser = false
			state.messageErrorUser = false
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(createUser.pending, (state) => {
				state.isLoading = true;
				state.error = false;
			})
			.addCase(createUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = false;
				state.userCreated = true;
				state.messageUser = 'Se ha creado el usuario correctamente';
			})
			.addCase(createUser.rejected, (state, action) => {
				state.isLoading = false;
				state.messageErrorUser = action.payload;
				state.error =  true;
			});
	},
});

export const { clearMessagedata } = userSlice.actions;
export default userSlice.reducer;