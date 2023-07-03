
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '../../env';
import axios from '../../axios';

// Define la acción asincrónica para crear un usuario
export const createUser = createAsyncThunk(
  'usuarios/crear',
  async ({ name, email, password, password_confirmation }, { rejectWithValue }) => {
    try {
      const respuesta = await axios.post(API_URL
        + "register", {
        name,
        email,
        password,
        password_confirmation,
      });
      return respuesta.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);