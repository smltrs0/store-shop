
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '../../env';
import axios from '../../axios';


export const fetchItemsList = createAsyncThunk(
  'auth/items',
  async ({page = 1, per_page = 10}, { rejectWithValue }) => {
    try {

      const response = await axios.post(API_URL + 'items', {
        page,
        per_page
      });      
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);