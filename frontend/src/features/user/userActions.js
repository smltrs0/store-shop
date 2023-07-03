
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '../../env';
import axios from '../../axios';

// Define la acción asincrónica para crear un usuario
export const createUser = createAsyncThunk(
  'usuarios/crear',
  async ({ name, email, password, password_confirmation }, { rejectWithValue }) => {
    try {
      return await axios.post(API_URL
        + "register", {
        name,
        email,
        password,
        password_confirmation,
      });
    } catch (error) {
      const errorMessage = Object.values(JSON.parse(error)).join(',');
      return rejectWithValue(errorMessage);
    }
  }
);