
import { createAsyncThunk } from '@reduxjs/toolkit';
import  authService  from '../../services/auth.service'; // Importa tu servicio de autenticación


export const sessionLogIn = createAsyncThunk(
  'auth/sessionLogIn',
  async (credenciales, { rejectWithValue }) => {
    try {

      const response = await authService.login(credenciales);
      return response.data;

    } catch (error) {
      return rejectWithValue(error);
    }
  }
);